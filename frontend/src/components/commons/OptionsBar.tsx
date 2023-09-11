"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import OptionsBox from "./OptionsBox";
import styled from "styled-components";
import { searchOptions } from "@/constants";

const UnitBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
`;

const Divider = styled.hr`
  width: 100%;
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: #d1d1d1;
  margin: 0px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 2rem;
`;

const OptionsBar = () => {
  const params = useSearchParams();
  const OptionSelected = params?.get("searchId");

  return (
    <UnitBarContainer id="unitbar-container">
      <Divider />
      <FlexRow>
        {searchOptions.map((option) => (
          <OptionsBox
            key={option.key}
            label={option.name}
            searchId={option.searchId}
            selected={OptionSelected === option.searchId}
            placeHolderText={option.placeHolder}
          />
        ))}
      </FlexRow>
      <Divider />
    </UnitBarContainer>
  );
};

export default OptionsBar;
