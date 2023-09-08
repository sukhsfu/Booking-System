"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

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

interface MyComponentProps {
  children: ReactNode;
}

const ButtonsWrapper = ({ children }: MyComponentProps) => {
  return (
    <Parent>
      <Wrapper>{children} </Wrapper>{" "}
    </Parent>
  );
};

export default ButtonsWrapper;
