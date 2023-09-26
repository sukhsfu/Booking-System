"use client";

import styled from "styled-components";
import HiddenLable from "@/components/commons/HiddenLabel";
import { useRouter, useSearchParams } from "next/navigation";
import "./styles.css";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

type WrapperProps = {
  gap?: string;
  margin?: string;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

const StyledText = styled.p`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StyledBox = styled.button<{ background: string; color: string }>`
  outline: none;
  border: 0px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

const StyledInput = styled.input`
  border-style: solid;
  background: #f5f4f2;
  color: #241c1c;
  margin: 11px 0px;
`;

const Login = () => {
  const router = useRouter();
  const params = useSearchParams();
  const type: any = params?.get("type");
  const onLogIn = (event: any) => {
    event.preventDefault();
    router.push(type);
  };

  const onSignUp = (event: any) => {
    event.preventDefault();
    router.push("new-" + type);
  };
  return (
    <FormContainer>
      <Wrapper>
        <form onSubmit={onLogIn}>
          <StyledText> Log In</StyledText>
          <Wrapper margin="22px 0px">
            <div>
              <HiddenLable htmlFor="user-name"> Username</HiddenLable>
              <StyledInput
                className="box-size"
                type="text"
                id="user-name"
                placeholder="Username"
              ></StyledInput>
            </div>
            <div>
              <HiddenLable htmlFor="user-password"> Password</HiddenLable>
              <StyledInput
                className="box-size"
                type="text"
                id="user-password"
                placeholder="Password"
              ></StyledInput>
            </div>
          </Wrapper>
          <Wrapper gap="7px">
            <StyledBox
              className="box-size"
              background="#1E3050"
              color="#F5F4F2"
              type="submit"
            >
              {" "}
              LOG IN
            </StyledBox>
            <StyledBox
              className="box-size"
              background="#C8C4B7B8"
              color="#241C1C"
              onClick={onSignUp}
            >
              {" "}
              Sign Up
            </StyledBox>
          </Wrapper>
        </form>
      </Wrapper>
    </FormContainer>
  );
};

export default Login;
