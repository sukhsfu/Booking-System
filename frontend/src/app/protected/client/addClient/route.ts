// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: Request) => {
  const url = `${process.env.CLIENT_URI}/client/create`;

  const userName = request.headers.get("userName");

  return request
    .json()
    .then((body) => {
      return new NextRequest(url, {
        method: "POST",
        headers: { userName, "Content-Type": "application/json" },
        body: JSON.stringify(body),
        duplex: "half",
      });
    })
    .then((serverRequest) => fetch(serverRequest))
    .then((res) => res.json())
    .then((client) => {
      return new NextResponse(client, {
        status: 200,
      });
    });
};
