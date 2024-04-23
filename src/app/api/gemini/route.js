import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Access your API key as an environment variable (make sure to configure environment variables)
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const GET = async (request) => {
  return NextResponse.json("Gemini Chatboat Get Method called", {
    status: 200,
  });
};

export const POST = async (request) => {
  const { prompt } = await request.json();
  console.log(prompt);
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
    console.log("Model:", model);
    console.log(prompt);

    const result = await model.generateContent(prompt);
    console.log("Result:", result);

    const response = await result.response;
    console.log("Response:", response);

    const text = response.text();
    console.log(text);

    return new NextResponse.json(
      { generatedText: text },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error("Error generating text:", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
