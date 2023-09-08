"use client";
import Button from "@/components/commons/Button";
import ButtonsWrapper from "@/components/commons/ButtonsWrapper";

const Client = () => {
  return (
    <ButtonsWrapper>
      <Button link="/"> View Appointments</Button>
      <Button link="/"> Create New Appointments</Button>
    </ButtonsWrapper>
  );
};

export default Client;
