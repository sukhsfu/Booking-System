"use client";
import Button from "@/components/commons/Button";
import ButtonsWrapper from "@/components/commons/ButtonsWrapper";

const HomePage = () => {
  return (
    <ButtonsWrapper>
      <Button link="/service"> Service Provider</Button>
      <Button link="/client"> Client</Button>
    </ButtonsWrapper>
  );
};

export default HomePage;
