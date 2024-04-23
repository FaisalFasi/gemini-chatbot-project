import React from "react";

export default function Home() {
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
            <p>Response</p>
          </div>
        </div>

        {/* Input Section */}
        <div className=" flex-1 h-full bg-blue-300 flex items-center justify-center">
          <div className="w-full p-4 flex">
            <input
              type="text"
              placeholder="Enter your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
