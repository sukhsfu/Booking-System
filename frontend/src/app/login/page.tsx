"use client";

import styled from "styled-components";
import HiddenLable from "@/components/commons/HiddenLabel";
import "./styles.css";

const Parent = styled.div`
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

const StyledBox = styled.div<{ background: string; color: string }>`
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
  return (
    <Parent>
      <Wrapper>
        <form>
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
            >
              {" "}
              LOG IN
            </StyledBox>
            <StyledBox
              className="box-size"
              background="#C8C4B7B8"
              color="#241C1C"
            >
              {" "}
              Sign Up
            </StyledBox>
          </Wrapper>
        </form>
      </Wrapper>
    </Parent>
  );
};

export default Login;
