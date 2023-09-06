"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  background: #eaf8fa;
  gap: 23%;
  padding-left: 10%;
  padding-bottom: 30px;
  padding-top: 20px;
  height: 122px;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

const SytledText = styled.h1`
  color: #1e3050;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ color: "#1E3050" }}
          size="5x"
        />
      </div>
      <SytledText>Appointment Booking System</SytledText>
    </StyledNav>
  );
};

export default Navbar;
