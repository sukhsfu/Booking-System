"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

const WrapperButton = styled.button`
  display: flex;
  width: 360px;
  height: 103px;
  padding: 28px 69px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1e3050;
`;

const SytledText = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

interface MyComponentProps {
  children: ReactNode;
}

const ServiceButton = ({ children }: MyComponentProps) => {
  return (
    <>
      <WrapperButton>
        <SytledText>{children}</SytledText>
      </WrapperButton>
    </>
  );
};

export default ServiceButton;
