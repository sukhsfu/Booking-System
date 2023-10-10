"use client";

import styled from "styled-components";
import HiddenLable from "@/components/commons/HiddenLabel";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { NextRequest } from "next/server";
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
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [baseUrl, setBaseurl] = useState<string>("");
  const router = useRouter();
  const params = useSearchParams();
  const type: any = params?.get("type");

  useEffect(() => {
    const host = window.location.host;
    setBaseurl(`http://${host}`);
  }, []);

  const onLogIn = (event: any) => {
    event.preventDefault();
    const request = new NextRequest(`${baseUrl}/api/logIn`, {
      method: "POST",
      headers: {
        credentials: "include",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    });
    fetch(request).then(
      (results) => results.status === 200 && router.push("protected/" + type)
    );
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const onSignUp = (event: any) => {
    event.preventDefault();
    router.push("sign-up/new-" + type);
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
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
              ></StyledInput>
            </div>
            <div>
              <HiddenLable htmlFor="user-password"> Password</HiddenLable>
              <StyledInput
                className="box-size"
                type="password"
                id="user-password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
