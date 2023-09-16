"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

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
  outline: none;
  border: 0px solid blue;
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
  link: string;
}

const Button = ({ children, link }: MyComponentProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(link);
  };
  return (
    <>
      <WrapperButton type="button" onClick={onClickHandler}>
        <SytledText>{children}</SytledText>
      </WrapperButton>
    </>
  );
};

export default Button;
