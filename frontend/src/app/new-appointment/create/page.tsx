"use client";

import SignUpForm, {
  Label,
  InputWrapper,
  Input,
  Error,
} from "@/components/commons/SignUpForm";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

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

const StyledDiv = styled.div`
  width: 400px;
`;
const CreateAppointment: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    appointmentDate: "",
  });

  const [formErrors, setFormErrors] = useState({
    appointmentDate: "",
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

    const dateTimePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if (!formData.appointmentDate.match(dateTimePattern)) {
      console.log(formData.appointmentDate);
      errors.appointmentDate = "Please provide a complete date and time";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setSuccess(true);
    }
  };

  return (
    <SignUpForm
      handleSubmit={handleSubmit}
      buttonText={success ? "Back to Booked Appointment" : "Create Appointment"}
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

      {!success && (
        <>
          <Label>Appointment Date</Label>
          <InputWrapper>
            <Input
              type="datetime-local"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
            />
            {formErrors.appointmentDate && (
              <Error>{formErrors.appointmentDate}</Error>
            )}
          </InputWrapper>
        </>
      )}
      {success && (
        <StyledDiv>
          <FieldSet>
            <Legend>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ color: "Green" }}
              />{" "}
              Appointment Booked
            </Legend>
            <div>
              <StyledP>2023-09-27, 12:00 Am</StyledP>
            </div>
          </FieldSet>
        </StyledDiv>
      )}
    </SignUpForm>
  );
};

export default CreateAppointment;
