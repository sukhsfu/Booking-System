import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch("http://localhost:8000/provider/getAll", {
    headers: {},
  });
  const data = await res.json();

  return NextResponse.json({ data });
};
