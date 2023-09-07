"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ViewPort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Container: React.FC<Props> = ({ children }) => {
  return <ViewPort>{children}</ViewPort>;
};

export default Container;
