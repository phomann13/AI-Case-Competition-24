from flask import Flask, jsonify, request
import pickle
import joblib
import pandas as pd
from flask_cors import CORS
import sklearn
import openai
import PyPDF2
import os
from dotenv import load_dotenv
load_dotenv(".env.local")
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
    print('HELLLLLO')
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

    # resume_text = extract_text_from_pdf(pdf_path)
    # resume_score = get_resume_score(resume_text, job_description)
    resume_score = '85/100 Explanation: He did good'
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
if __name__ == '__main__':
    app.run(debug=True)
