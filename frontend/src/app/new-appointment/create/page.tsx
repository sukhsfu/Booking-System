"use client";

import SignUpForm, {
  Label,
  InputWrapper,
  Input,
  Error,
} from "@/components/commons/SignUpForm";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  onSubmit: () => void;
  formNumber: string;
};

const FieldSet = styled.fieldset`
  margin-bottom: 30px;
  padding-top: 22px;
`;

const Legend = styled.legend`
  padding: 0 4px;
`;

const StyledP = styled.p`
  color: gray;
`;
const createAppointment: React.FC<Props> = ({ onSubmit, formNumber }) => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    displayName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    setFormErrors((prevFormErrors) => {
      return {
        ...prevFormErrors,
        [name]: "",
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors: any = {};

    if (!formData.displayName.trim()) {
      errors.name = "Display Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      errors.email = "Invalid email address";
    }

    const phoneNumberPattern = /^\d{10}$/;
    if (!formData.phone.match(phoneNumberPattern)) {
      errors.phone = "Invalid phone number";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      onSubmit();
    }
  };

  return (
    <SignUpForm
      handleSubmit={handleSubmit}
      buttonText="Create Appointment"
      formNumber={formNumber}
      noTitle
    >
      <FieldSet>
        <Legend> Provider Details</Legend>
        <div>
          <StyledP>Sukhwinder Singh</StyledP>
          <StyledP>7786971684</StyledP>
          <StyledP>sukh.dhaliwal.9678@gmail.com</StyledP>
        </div>
      </FieldSet>

      <FieldSet>
        <Legend> Appointment Address</Legend>
        <div>
          <StyledP>6971 144 ST</StyledP>
          <StyledP> Surrey, BC Canada</StyledP>
          <StyledP> V3W 5R8</StyledP>
        </div>
      </FieldSet>

      <Label>Phone Number</Label>
      <InputWrapper>
        <Input
          type="datetime-local"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {formErrors.phone && <Error>{formErrors.phone}</Error>}
      </InputWrapper>
    </SignUpForm>
  );
};

export default createAppointment;
