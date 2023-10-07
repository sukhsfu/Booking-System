"use client";

import SignUpForm, {
  Label,
  InputWrapper,
  Input,
  Error,
} from "@/components/commons/SignUpForm";
import React, { memo, useState } from "react";

type Props = {
  onSubmit: (userName: string, password: string) => void;
  formNumber: string;
};

const UserCredential: React.FC<Props> = memo(({ onSubmit, formNumber }) => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.userName.trim()) {
      errors.userName = "UserName is required";
    }

    if (formData.userName === "xxx") {
      errors.userName = "UserName already taken";
    }

    if (!formData.password.trim()) {
      errors.password = "password is required";
    }

    if (formData.password.length < 8) {
      errors.password = "password should be at least 8 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "passwords does not match";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      onSubmit(formData.userName, formData.password);
    }
  };

  return (
    <SignUpForm
      handleSubmit={handleSubmit}
      buttonText="Next"
      formNumber={formNumber}
    >
      <Label>UserName</Label>
      <InputWrapper>
        <Input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
        {formErrors.userName && <Error>{formErrors.userName}</Error>}
      </InputWrapper>

      <Label>Password</Label>
      <InputWrapper>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && <Error>{formErrors.password}</Error>}
      </InputWrapper>

      <Label>Confirm Password</Label>
      <InputWrapper>
        <Input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {formErrors.confirmPassword && (
          <Error>{formErrors.confirmPassword}</Error>
        )}
      </InputWrapper>
    </SignUpForm>
  );
});

export default UserCredential;
