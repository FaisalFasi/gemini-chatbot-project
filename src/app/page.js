"use client";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [responseText, setResponseText] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  async function sendMessage(prompt) {
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Generated text:", data.generatedText);
      setResponseText(data.generatedText); // Update response text state
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error gracefully
      setResponseText("Error occurred while processing the message.");
    }
  }

  // Usage example:
  sendMessage("Write a story about a magic backpack.").then((generatedText) => {
    // Handle the generated text here
  });

  const handleInputChange = (e) => {
    setInputMessage(e.target.value); // Update input message state
  };
  const handleSubmit = () => {
    sendMessage(inputMessage); // Send message to chatbot API
    setInputMessage(""); // Clear input message after sending
  };
  return (
    <main className="h-screen flex flex-col">
      {/* Title Section */}
      <div className="bg-blue-300 p-10">
        <h1 className="font-bold text-3xl text-black text-center">
          Welcome to Gemini ChatBot
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between mx-20 my-4">
        {/* Response Section */}
        <div className="flex-4 h-full bg-blue-200">
          <div className="p-4">
            {inputMessage && (
              <p className="text-gray-600 mb-4">You: {inputMessage}</p>
            )}

            {/* Display chatbot's response */}
            {responseText && (
              <p className="text-black">ChatBot: {responseText}</p>
            )}
          </div>
        </div>

        {/* Input Section */}
        <div className=" flex-1 h-full bg-blue-300 flex items-center justify-center">
          <div className="w-full p-4 flex">
            <input
              type="text"
              placeholder="Enter your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              value={inputMessage}
              onChange={handleInputChange}
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
