// @ts-nocheck
import React from "react";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import BookedAppointment from "@/components/booked-appointment/BookedAppointment";

const Provider = async () => {
  const userName = headers().get("userName");
  const request = new NextRequest(
    `${process.env.APPOINTMENT_URI}/appointment/getAllByProvider`,
    {
      method: "GET",
      headers: {
        userName,
        credentials: "include",
        "Content-Type": "application/json",
      },
    }
  );
  return <BookedAppointment request={request} />;
};

export default Provider;
