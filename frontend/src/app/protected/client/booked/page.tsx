import BookedAppointment from "@/components/booked-appointment/BookedAppointment";
import React from "react";
import TopBarNavigation from "@/components/commons/TopBarNavigation";

const ClientBooked = () => {
  return (
    <>
      <TopBarNavigation link="/client">Create new appointment</TopBarNavigation>
      <BookedAppointment url="http://localhost:8010/appointment/getAllByClient/1" />
    </>
  );
};

export default ClientBooked;
