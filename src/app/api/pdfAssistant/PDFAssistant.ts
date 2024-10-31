const openai = require('openai'); // Make sure you have the OpenAI library installed

// Function to upload a file and process a request
const uploadFileAndProcess = async (file) => {
    try {
        // Create FormData for the file upload
        const formData = new FormData();
        formData.append('file', file); // Append the file to the form data

        // Upload the file to OpenAI
        const uploadResponse = await openai.files.upload(formData);
        const fileId = uploadResponse.id; // Get the ID of the uploaded file

        // Create a chat completion request using the uploaded file
        const response = await openai.chat.completions.create({
            model: 'gpt-4', // Replace with the model you're using
            messages: [
                { role: 'user', content: 'What insights can you provide from this file?' } // Customize your query
            ],
            tools: [
                {
                    type: 'function', // Use 'function' as the tool type
                    function: {
                        name: 'process_file', // Define your function name
                        parameters: {
                            file_id: fileId, // Pass the file ID as a parameter
                            // Include any other parameters your function requires
                        },
                    },
                },
            ],
        });

        // Return or process the response as needed
        return response;
    } catch (error) {
        console.error('Error processing request:', error); // Log the error
        throw error; // Rethrow the error for further handling
    }
};

// Example usage: Assuming you have a file to upload
const fileToUpload = 'path/to/your/file.pdf'; // Replace with your file path

// To call the function, use Node.js to read the file (e.g., using fs)
const fs = require('fs');

const main = async () => {
    try {
        const file = fs.createReadStream(fileToUpload); // Create a readable stream for the file
        const result = await uploadFileAndProcess(file); // Call the upload and process function
        console.log('API Response:', result); // Log the API response
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

main(); // Run the main function
