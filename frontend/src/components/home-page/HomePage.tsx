"use client";
import Button from "@/components/commons/Button";
import ButtonsWrapper from "@/components/commons/ButtonsWrapper";
import styled from "styled-components";

const StyledText = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

const HomePage = () => {
  return (
    <ButtonsWrapper>
      <StyledText> Do you want to login as?</StyledText>
      <Button link="/login/?type=provider"> Service Provider</Button>
      <Button link="/login/?type=client"> Client</Button>
    </ButtonsWrapper>
  );
};

export default HomePage;
