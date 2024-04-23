import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (make sure to configure environment variables)
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Function to handle POST requests to the /api/chatbot endpoint
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Get the generative model (e.g., "gemini-pro")
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // Extract the input prompt from the request body
      const { prompt } = req.body;

      // Generate content based on the input prompt
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Return the generated text as the API response
      res.status(200).json({ generatedText: text });
    } catch (error) {
      console.error("Error generating text:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
