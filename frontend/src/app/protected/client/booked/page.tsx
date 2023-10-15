// @ts-nocheck
import { headers } from "next/headers";
import BookedAppointment from "@/components/booked-appointment/BookedAppointment";
import React from "react";
import { NextRequest } from "next/server";
import TopBarNavigation from "@/components/commons/TopBarNavigation";

const ClientBooked = () => {
  const userName = headers().get("userName");
  const request = new NextRequest(
    `http://localhost:8010/appointment/getAllByClient`,
    {
      method: "GET",
      headers: {
        userName,
        credentials: "include",
        "Content-Type": "application/json",
      },
    }
  );

  return (
    <>
      <TopBarNavigation link="/protected/client">
        Create new appointment
      </TopBarNavigation>
      <BookedAppointment request={request} />
    </>
  );
};

export default ClientBooked;
