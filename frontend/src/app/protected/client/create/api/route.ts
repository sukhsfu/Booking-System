//@ts-nocheck
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (request: NextRequest) => {
  const requestUrl = new URL(request.url);
  const providerId = requestUrl.searchParams.get("providerId");
  const url = `${process.env.PROVIDER_URI}/provider/providerAppointment/${providerId}`;

  const res = await fetch(url, { cache: "no-store" });
  const provider = await res.json();
  return NextResponse.json(provider);
};

export const POST = async (request: Request) => {
  const url = `${process.env.APPOINTMENT_URI}/appointment/create`;

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
    .then((appointment) => {
      return NextResponse.json(appointment);
    });
};
