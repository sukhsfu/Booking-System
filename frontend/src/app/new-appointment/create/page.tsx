"use client";

import SignUpForm, {
  Label,
  InputWrapper,
  Input,
  Error,
} from "@/components/commons/SignUpForm";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { GET } from "../../../api/route";
import { NextRequest } from "next/server";
import { providerIdSelected } from "@/redux/search/appointmentdata-slice";
import { useSelector } from "react-redux";

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
  const providerId = useSelector(providerIdSelected);
  const [provider, setProvider] = useState<any>();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    appointmentDate: "",
  });

  const [formErrors, setFormErrors] = useState({
    appointmentDate: "",
  });

  useEffect(() => {
    GET(
      new NextRequest(
        `http://localhost:8000/provider/providerAppointment/${providerId}`
      )
    )
      .then((results) => results.json())
      .then((res) => {
        setProvider(res.data);
      });
  }, []);

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
      console.log(formData.appointmentDate);
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
          <StyledP>{provider?.name}</StyledP>
          <StyledP>{provider?.phone}</StyledP>
          <StyledP>{provider?.email}</StyledP>
        </div>
      </FieldSet>

      <FieldSet>
        <Legend> Appointment Address</Legend>
        <div>
          <StyledP>{provider?.street}</StyledP>
          <StyledP> {provider?.cityState}</StyledP>
          <StyledP> {provider?.postalCode}</StyledP>
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
