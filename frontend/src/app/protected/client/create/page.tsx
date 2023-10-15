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
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

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
  const searchParams = useSearchParams();
  const router = useRouter();
  const providerId = searchParams.get("id");
  const [provider, setProvider] = useState<any>();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    appointmentDate: "",
  });
  const [bookedDate, setBookedDate] = useState("");
  const [formErrors, setFormErrors] = useState({
    appointmentDate: "",
  });

  useEffect(() => {
    fetch(`create/api/?providerId=${providerId}`)
      .then((results) => results.json())
      .then((res) => {
        setProvider(res);
      });
  }, []);

  const CreateAppointment = async (date: any) => {
    fetch(`create/api`, {
      method: "POST",
      body: JSON.stringify({
        providerId: providerId,
        appointmentDate: date,
      }),
    })
      .then((result) => result.json())
      .then((appointment) => {
        appointment && setSuccess(true);
        setBookedDate(appointment?.appointmentDate);
      });
  };

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

  const handleBooked = (e: any) => {
    e.preventDefault();
    router.push("/protected/client/booked");
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
      CreateAppointment(formData.appointmentDate);
    }
  };

  return (
    <SignUpForm
      handleSubmit={success ? handleBooked : handleSubmit}
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
              <StyledP>{bookedDate}</StyledP>
            </div>
          </FieldSet>
        </StyledDiv>
      )}
    </SignUpForm>
  );
};

export default CreateAppointment;
