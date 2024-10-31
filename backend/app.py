from flask import Flask, jsonify, request
import pickle
import joblib
import pandas as pd
from flask_cors import CORS
import sklearn
import openai
import PyPDF2
from PyPDF2 import PdfReader
import os # This will print all environment variables

from dotenv import load_dotenv
load_dotenv("../.env.local")
openai.api_key = os.getenv("OPENAI_API_KEY")
app = Flask(__name__)
CORS(app)
@app.route('/api/jobs', methods=['GET'])
def get_jobs():
    # Sample job data
    jobs = [
        {'id': 1, 'title': 'Software Engineer', 'companyName': 'Tech Corp', 'applicationStage': 'Sponsorship Applied', 'progress': 75, 'description': 'Developing and maintaining software applications.', 'notes': 'Application submitted, waiting for HR feedback.'},
        # Add more job entries...
    ]
    return jsonify(jobs)

@app.route('/predict', methods=['POST'])
def predict():
    print('--------------------------------',os.getcwd())
    pipeline = joblib.load('backend/logistic_regression_model_with_encoder.pkl')
    # Get the JSON data from the request
    data = request.json
    print(data)

    # Convert the input data into a DataFrame
    df = pd.DataFrame(data)

    # Make predictions using the loaded pipeline
    predictions = pipeline.predict(df)

    # Return predictions as a JSON response
    return jsonify(predictions.tolist())

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file."""
    with open(pdf_path, "rb") as file:
        pdf_reader = PyPDF2.PdfReader(file)
        text = ""
        for page_num in range(len(pdf_reader.pages)):
            text += pdf_reader.pages[page_num].extract_text()
    return text

def get_resume_score(resume_text, job_description):
    """Get a score for the resume against a job description."""
    prompt = f"""
    You are a recruitment AI. Evaluate this resume based on the job description provided.
    Return a score out of 100, with a detailed explanation if possible.

    Job Description:
    {job_description}

    Resume:
    {resume_text}

    Score (Formatted as x/100):
    """

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    score_output = response.choices[0].message.content
    return score_output

def transcribe_audio(audio_file_path):
    """Use OpenAI's Whisper ASR to transcribe audio."""
    with open(audio_file_path, "rb") as audio_file:
         transcript = openai.Audio.transcribe(
        model="whisper-1",  # Ensure you specify the correct model
        file=audio_file
    )
    print('Transcript', transcript)
    return transcript.text

def evaluate_interview_response(question, transcribed_response):
    """Evaluate a user's interview response based on a sample question and return a score out of 100."""
    prompt = f"""
    You are an interview coach. Rate the user's response to the interview question out of 100,
    considering relevance, clarity, and alignment with the job description. Provide feedback as well.

    Interview Question:
    {question}

    User's Response:
    {transcribed_response}

    Score and Feedback (Formatted as x/100):
    """

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    score_output = response.choices[0].message.content
    return score_output

@app.route('/evaluate', methods=['POST'])
def evaluate():
    if 'pdf_path' not in request.files or 'job_description' not in request.form:
        return jsonify({"error": "Missing data"}), 400

    pdf_file = request.files['pdf_path']
    job_description = request.form['job_description']
    interview_questions = request.form.getlist('interview_questions[]')
    audio_file_paths = request.files.getlist('audio_file_paths[]')

    # Save the PDF file temporarily
    pdf_path = f"temp_{pdf_file.filename}"
    pdf_file.save(pdf_path)

    resume_text = extract_text_from_pdf(pdf_path)
    resume_score = get_resume_score(resume_text, job_description)
    print('Resume score', resume_score)
    evaluations = []
    print('interview_questions', interview_questions, 'audio_file_paths', audio_file_paths)
    for question, audio_file in zip(interview_questions, audio_file_paths):
        audio_file_path = f"temp_{audio_file.filename}"
        audio_file.save(audio_file_path)  # Save the audio file temporarily
        transcribed_response = transcribe_audio(audio_file_path)
        print(transcribed_response)
        response_score = evaluate_interview_response(question, transcribed_response)
        print("question", question,
            "transcribed_response", transcribed_response,
            "score", response_score)
        evaluations.append({
            "question": question,
            "transcribed_response": transcribed_response,
            "score": response_score
        })
    print(resume_score, evaluations)
    return jsonify({
        "resume_score": resume_score,
        "evaluations": evaluations
    })
    
sessions = {}


def extract_text(pdf_file):
    """Extract text from a PDF file."""
    pdf_reader = PyPDF2.PdfReader(pdf_file)
    text = ""
    for page_num in range(len(pdf_reader.pages)):
        text += pdf_reader.pages[page_num].extract_text()
    return text


def split_text_into_batches(text, max_length=1500):
    """Splits the text into batches that do not exceed the max_length."""
    words = text.split()
    batches = []
    current_batch = []

    for word in words:
        # Check if adding the next word exceeds the max length
        if len(' '.join(current_batch + [word])) <= max_length:
            current_batch.append(word)
        else:
            # If we exceed max length, store the current batch and start a new one
            batches.append(' '.join(current_batch))
            current_batch = [word]

    # Add any remaining words as a final batch
    if current_batch:
        batches.append(' '.join(current_batch))

    return batches

def get_session_id(req):
    """Retrieve session ID from request headers or generate a new one if not present."""
    session_id = req.headers.get('session-id')
    if not session_id:
        session_id = str(uuid.uuid4())  # Generate a new session ID
    return session_id
import logging

logging.basicConfig(level=logging.DEBUG)


   
chat_history = {}

def extract_text_from_pdf(pdf_file):
    text = ''
    reader = PyPDF2.PdfReader(pdf_file)
    for page in reader.pages:
        text += page.extract_text() + '\n'
    return text

@app.route('/api/pdfAssistant', methods=['POST'])
def pdf_assistant():
    session_id = request.headers.get('session-id')
    
    # Initialize chat history if session_id is new
    if session_id not in chat_history:
        chat_history[session_id] = []

    pdf_file = request.files.get('pdfFile')
    prompt = request.form.get('prompt')

    if pdf_file and prompt:
        pdf_text = extract_text_from_pdf(pdf_file)
        response_text = ''
        # Split text into batches if too large
        text_batches = [pdf_text[i:i + 2048] for i in range(0, len(pdf_text), 2048)]

        for batch in text_batches:
            completion = openai.ChatCompletion.create(
                model='gpt-3.5-turbo',
                messages=[
                    {"role": "user", "content": prompt},
                    {"role": "user", "content": batch}
                ]
            )
            response_text += completion.choices[0].message.content + '\n'

        # Store the initial prompt and response in chat history
        chat_history[session_id].append({"role": "user", "content": prompt})
        chat_history[session_id].append({"role": "assistant", "content": response_text.strip()})  # Change 'bot' to 'assistant'

        return jsonify({"reply": response_text.strip()}), 200

    elif request.json and 'message' in request.json:
        user_message = request.json['message']
        
        # Ensure that session_id is initialized
        if session_id not in chat_history:
            chat_history[session_id] = []
        
        # Append the new message to the chat history
        chat_history[session_id].append({"role": "user", "content": user_message})

        # Generate response using chat history
        completion = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=chat_history[session_id],  # Use the entire chat history
            request_timeout=60
        )

        bot_reply = completion.choices[0].message.content
        chat_history[session_id].append({"role": "assistant", "content": bot_reply})  # Change 'bot' to 'assistant'

        return jsonify({"reply": bot_reply}), 200

    return jsonify({"error": "User prompt or PDF file is required."}), 400

if __name__ == '__main__':
    app.run(debug=True)
