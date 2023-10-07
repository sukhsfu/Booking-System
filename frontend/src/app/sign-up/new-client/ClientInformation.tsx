"use client";

import SignUpForm, {
  Label,
  InputWrapper,
  Input,
  Error,
} from "@/components/commons/SignUpForm";
import React, { useState } from "react";

type Props = {
  onSubmit: () => void;
  formNumber: string;
};

const ClientInformation: React.FC<Props> = ({ onSubmit, formNumber }) => {
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
      buttonText="Create Account"
      formNumber={formNumber}
    >
      <Label>Display Name</Label>
      <InputWrapper>
        <Input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleInputChange}
        />
        {formErrors.displayName && <Error>{formErrors.displayName}</Error>}
      </InputWrapper>

      <Label>Email</Label>
      <InputWrapper>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <Error>{formErrors.email}</Error>}
      </InputWrapper>

      <Label>Phone Number</Label>
      <InputWrapper>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {formErrors.phone && <Error>{formErrors.phone}</Error>}
      </InputWrapper>
    </SignUpForm>
  );
};

export default ClientInformation;
