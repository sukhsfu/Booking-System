import { NextRequest, NextResponse } from "next/server";

export const GET = async (url: string) => {
  const res = await fetch(url, {
    headers: {},
  });
  const data = await res.json();

  return NextResponse.json({ data });
};

export const POST = async (url: string, body: string) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await res.json();

  return data;
};
