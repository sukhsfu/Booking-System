//@ts-nocheck
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: Request) => {
  const url = `${process.env.IDENTITY_SERVICE_URI}/auth/token`;
  const serverRequest = new NextRequest(url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    duplex: "half",
  });

  const res = await fetch(serverRequest);
  const userToken = await res.text();
  cookies().set("userToken", userToken);
  const response = new NextResponse("Authenticated", {
    status: 200,
  });
  return response;
};
