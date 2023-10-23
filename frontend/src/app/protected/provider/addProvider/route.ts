// @ts-nocheck
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: Request) => {
  const url = `${process.env.PROVIDER_URI}/provider/create`;

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
    .then((serverRequest) => fetch(serverRequest, { cache: "no-store" }))
    .then((res) => res.json())
    .then((provider) => {
      return new NextResponse(provider, {
        status: 200,
      });
    });
};
