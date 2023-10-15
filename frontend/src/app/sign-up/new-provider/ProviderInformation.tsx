"use client";

import SignUpForm, {
  Label,
  InputWrapper,
  Input,
  Error,
} from "@/components/commons/SignUpForm";
import React, { memo, useState } from "react";

type Props = {
  onSubmit: (
    name: string,
    email: string,
    phone: string,
    service: string,
    price: string
  ) => void;
  formNumber: string;
};

const ProviderInformation: React.FC<Props> = memo(
  ({ onSubmit, formNumber }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      price: "",
    });

    const [formErrors, setFormErrors] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      price: "",
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

      if (!formData.name.trim()) {
        errors.name = "Business Name is required";
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.match(emailPattern)) {
        errors.email = "Invalid email address";
      }

      const phoneNumberPattern = /^\d{10}$/;
      if (!formData.phone.match(phoneNumberPattern)) {
        errors.phone = "Invalid phone number";
      }

      if (!formData.service.trim()) {
        errors.service = "Service is required";
      }

      const pricePattern = /^[1-9]\d*(\.\d+)?$/;
      if (!formData.price.match(pricePattern)) {
        errors.price = "Add price above $0.00";
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        onSubmit(
          formData.name,
          formData.email,
          formData.phone,
          formData.service,
          formData.price
        );
      }
    };

    return (
      <SignUpForm
        handleSubmit={handleSubmit}
        buttonText="Next"
        formNumber={formNumber}
      >
        <Label>Business Name</Label>
        <InputWrapper>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <Error>{formErrors.name}</Error>}
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

        <Label>Service</Label>
        <InputWrapper>
          <Input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
          />
          {formErrors.service && <Error>{formErrors.service}</Error>}
        </InputWrapper>

        <Label>Price</Label>
        <InputWrapper>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          {formErrors.price && <Error>{formErrors.price}</Error>}
        </InputWrapper>
      </SignUpForm>
    );
  }
);

ProviderInformation.displayName = "ProviderInformation";
export default ProviderInformation;
