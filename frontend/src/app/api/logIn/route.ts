// @ts-nocheck
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: Request) => {
  const url = `${process.env.IDENTITY_SERVICE_URI}/auth/token`;
  const serverRequest = new NextRequest(url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    duplex: "half",
  });

  const res = await fetch(serverRequest, { cache: "no-store" });
  const userToken = await res.text();
  const response = new NextResponse("Authenticated", {
    status: 200,
  });
  response.cookies.set("userToken", userToken);
  return response;
};
