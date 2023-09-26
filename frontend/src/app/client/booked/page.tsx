import BookedAppointment from "@/components/booked-appointment/BookedAppointment";
import React from "react";

const ClientBooked = async () => {
  return (
    <BookedAppointment url="http://localhost:8010/appointment/getAllByClient/1" />
  );
};

export default ClientBooked;
