import { NextResponse } from "next/server";

export const GET = async (request) => {
  return NextResponse.json("admins", {
    status: 200,
  });
};

export const POST = async (request) => {
  const body = await request.json();
  console.log(body.prompt);
  try {
    return new NextResponse(body.prompt, { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
