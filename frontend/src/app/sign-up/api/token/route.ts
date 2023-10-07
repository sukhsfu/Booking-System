import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const GET = async (request: Request) => {
  const url = "http://104.197.128.187:8080/auth/register";
  const body = JSON.stringify({
    userName: "devTest1",
    password: "123456789",
    roles: ["PROVIDER"],
  });
  const res = await fetch(url, {
    method: "POST",
    headers: {
      credentials: "include",
      "Content-Type": "application/json",
    },
    body,
  });
  const userToken = await res.text();

  cookies().set("userToken", userToken);

  const response = new NextResponse("Authenticated", {
    status: 200,
  });

  return response;
};
