"use client";

import React, { useCallback, useEffect, useState } from "react";
import { getDatafromJson } from "@/actions/getDatafromJson";
import SearchBar from "@/components/commons/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import OptionsBar from "@/components/commons/OptionsBar";
import Table from "@/components/commons/Table";
import ActionButton from "@/components/commons/ActionButton";
import { itemSelected } from "@/redux/search/newappointment-slice";
import { useSelector } from "react-redux";

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
  const [data, setData] = useState<any>([]);
  const [headers, setHeaders] = useState<any>([]);
  const icon = (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="bg-slate-100 text-[#d1d1d1]"
    />
  );

  useEffect(() => {
    const json = getDatafromJson();
    json && setHeaders(Object.keys(json[0]));
    setData(json);
  }, []);

  return (
    <Parent>
      <HeadBar>
        <SearchBar icon={icon}></SearchBar>
        <ActionButton
          label="Create new Appointment"
          link="/"
          icon={<FontAwesomeIcon icon={faPlus} />}
          disabled={!anyItemSelected}
        ></ActionButton>
      </HeadBar>
      <OptionsBar></OptionsBar>
      <Table data={data} headers={headers} selectAvailble />
    </Parent>
  );
};

export default NewAppointment;
