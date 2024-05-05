import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  const blob = await put(filename || "banana", request.body || "banana", {
    access: "public",
  });

  return NextResponse.json(blob);
}
