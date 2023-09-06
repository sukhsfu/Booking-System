"use client";
import styled from "styled-components";
import ServiceButton from "./ServiceButton";

const Parent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
`;

const HomePage = () => {
  return (
    <Parent>
      <Wrapper>
        <ServiceButton> Service Provider</ServiceButton>
        <ServiceButton> Client</ServiceButton>
      </Wrapper>
    </Parent>
  );
};

export default HomePage;
