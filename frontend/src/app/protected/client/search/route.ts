import { NextRequest, NextResponse } from "next/server";
export const GET = async (request: Request) => {
  //get search param type and get result accordingly
  const url = `http://localhost:8000/provider/getAll`;

  const res = await fetch(url);
  const providerList = await res.json();
  return NextResponse.json(providerList);
};
