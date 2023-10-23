//@ts-nocheck
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (request: NextRequest) => {
  //get search param type and get result accordingly
  const url = `${process.env.PROVIDER_URI}/provider/getAll`;

  const res = await fetch(url, { cache: "no-store" });
  const providerList = await res.json();
  return NextResponse.json(providerList);
};
