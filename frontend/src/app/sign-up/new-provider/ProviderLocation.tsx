"use client";

import SignUpForm, {
  Label,
  InputWrapper,
  Input,
  Error,
} from "@/components/commons/SignUpForm";
import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin-bottom: 20px;
`;

type Props = {
  onSubmit: () => void;
  formNumber: string;
};

const ProviderLocation: React.FC<Props> = ({ onSubmit, formNumber }) => {
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    province: "BC",
    country: "Canada",
    postalCode: "",
  });

  const [formErrors, setFormErrors] = useState({
    streetAddress: "",
    city: "",
    postalCode: "",
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

    if (!formData.streetAddress.trim()) {
      errors.streetAddress = "Street address is required";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
    }

    const postalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    if (!formData.postalCode.match(postalCodePattern)) {
      errors.postalCode = "Invalid Canadian postal code format (e.g., A1A 1A1)";
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
      <Label>Street Address</Label>
      <InputWrapper>
        <Input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
        />
        {formErrors.streetAddress && <Error>{formErrors.streetAddress}</Error>}
      </InputWrapper>

      <Label>City</Label>
      <InputWrapper>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        {formErrors.city && <Error>{formErrors.city}</Error>}
      </InputWrapper>

      <Label>Province</Label>
      <InputWrapper>
        <Select
          name="province"
          value={formData.province}
          onChange={handleInputChange}
        >
          <option value="AB">Alberta</option>
          <option value="BC">British Columbia</option>
          <option value="MB">Manitoba</option>
          <option value="NB">New Brunswick</option>
          <option value="NL">Newfoundland and Labrador</option>
          <option value="NS">Nova Scotia</option>
          <option value="NT">Northwest Territories</option>
          <option value="NU">Nunavut</option>
          <option value="ON">Ontario</option>
          <option value="PE">Prince Edward Island</option>
          <option value="QC">Quebec</option>
          <option value="SK">Saskatchewan</option>
          <option value="YT">Yukon</option>
        </Select>
      </InputWrapper>

      <Label>Country</Label>
      <InputWrapper>
        <Select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="Canada">Canada</option>
        </Select>
      </InputWrapper>

      <Label>Postal Code</Label>
      <InputWrapper>
        <Input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
        />
        {formErrors.postalCode && <Error>{formErrors.postalCode}</Error>}
      </InputWrapper>
    </SignUpForm>
  );
};

export default ProviderLocation;
