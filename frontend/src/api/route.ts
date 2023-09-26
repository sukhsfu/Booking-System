import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const res = await fetch(request.url, {
    headers: {},
  });
  const data = await res.json();

  return NextResponse.json({ data });
};
