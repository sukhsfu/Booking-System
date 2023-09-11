"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import queryString from "query-string";
import styled from "styled-components";
import { onPlaceHolderChange } from "@/redux/search/placeHolder-slice";
import { useDispatch } from "react-redux";

type Props = {
  label: string;
  selected: boolean;
  searchId: String;
  placeHolderText: String;
};

const BoxContainer: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s;
  color: #6b7280;
  &:hover {
    color: #4a5568;
  }

  ${(props: any) =>
    props.selected &&
    `
    border-color: #000;
    font-weight: bold;
    color: #000;
  `}
`;

const BoxText = styled.div`
  font-size: 1.5rem;
  padding: 10px;
`;

const OptionsBox: React.FC<Props> = ({
  label,
  selected,
  searchId,
  placeHolderText,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      searchId,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/new-appointment",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
    dispatch(onPlaceHolderChange(placeHolderText));
  }, [label, params, router]);

  return (
    <BoxContainer onClick={handleClick} selected={selected}>
      <BoxText>{label}</BoxText>
    </BoxContainer>
  );
};

export default OptionsBox;
