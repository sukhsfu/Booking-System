"use client";

import { FormEventHandler, ReactNode } from "react";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #1e3050;
  color: #fff;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const FormNumber = styled.p`
  opacity: 0.65;
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`;

export const Error = styled.div`
  width: inherit;
  color: red;
  font-size: 12px;
`;

interface SignUpFormProps {
  children: ReactNode;
  handleSubmit: FormEventHandler;
  buttonText: string;
  formNumber: string;
}

const SignUpForm = ({
  children,
  handleSubmit,
  buttonText,
  formNumber,
}: SignUpFormProps) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        {children}
        <BottomBar>
          <Button type="submit">{buttonText}</Button>
          <FormNumber> {formNumber} </FormNumber>
        </BottomBar>
      </Form>
    </Container>
  );
};

export default SignUpForm;
