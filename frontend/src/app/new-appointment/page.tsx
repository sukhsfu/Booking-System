"use client";

import React from "react";

import SearchBar from "@/components/commons/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import OptionsBar from "@/components/commons/OptionsBar";
import ActionButton from "@/components/commons/ActionButton";
import { itemSelected } from "@/redux/search/newappointment-slice";
import { useSelector } from "react-redux";
import ProviderList from "./ProviderList";

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
  const anyItemSelected = useSelector(itemSelected);
  const icon = (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="bg-slate-100 text-[#d1d1d1]"
    />
  );

  return (
    <Parent>
      <HeadBar>
        <SearchBar icon={icon}></SearchBar>
        <ActionButton
          label="Create new Appointment"
          link="/create"
          icon={<FontAwesomeIcon icon={faPlus} />}
          disabled={!anyItemSelected}
        ></ActionButton>
      </HeadBar>
      <OptionsBar></OptionsBar>
      <ProviderList />
    </Parent>
  );
};

export default NewAppointment;
