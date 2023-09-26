import BookedAppointment from "@/components/booked-appointment/BookedAppointment";
import React from "react";

const Provider = async () => {
  return (
    <BookedAppointment url="http://localhost:8010/appointment/getAllByProvider/1" />
  );
};

export default Provider;
