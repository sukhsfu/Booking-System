"use client";

import React from "react";

import SearchBar from "@/components/commons/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import OptionsBar from "@/components/commons/OptionsBar";
import ActionButton from "@/components/commons/ActionButton";
import { itemSelected } from "@/redux/search/newappointment-slice";
import { providerIdSelected } from "@/redux/search/appointmentdata-slice";
import { useSelector } from "react-redux";
import ProviderList from "./ProviderList";
import TopBarNavigation from "@/components/commons/TopBarNavigation";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  height: 100%;
  padding: 30px;
  width: 100%;
`;

const HeadBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NewAppointment = () => {
  const providerId = useSelector(providerIdSelected);
  const link = `/create/?id=${providerId}`;
  const anyItemSelected = useSelector(itemSelected);
  const icon = (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="bg-slate-100 text-[#d1d1d1]"
    />
  );

  return (
    <>
      <TopBarNavigation link="/client/booked">
        View booked appointments
      </TopBarNavigation>
      <Parent>
        <HeadBar>
          <SearchBar icon={icon}></SearchBar>
          <ActionButton
            label="Create new Appointment"
            link={link}
            icon={<FontAwesomeIcon icon={faPlus} />}
            disabled={!anyItemSelected}
          ></ActionButton>
        </HeadBar>
        <OptionsBar></OptionsBar>
        <ProviderList />
      </Parent>
    </>
  );
};

export default NewAppointment;
