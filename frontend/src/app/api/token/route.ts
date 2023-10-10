// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export const POST = async (request: Request) => {
  const url = `http://localhost:8080/auth/register`;
  const serverRequest = new NextRequest(url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    duplex: "half",
  });

  const res = await fetch(serverRequest);
  return res.text().then((userToken) => {
    cookies().set("userToken", userToken);
    const response = new NextResponse("Authenticated", {
      status: 200,
    });

    return response;
  });
};
