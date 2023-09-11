"use client";

import SearchBar from "@/components/commons/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import OptionsBar from "@/components/commons/OptionsBar";
import Table from "@/components/commons/Table";
import Button from "@/components/commons/Button";

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
      </HeadBar>
      <OptionsBar></OptionsBar>
      <Table />
    </Parent>
  );
};

export default NewAppointment;
