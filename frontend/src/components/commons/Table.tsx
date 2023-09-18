"use client";
import React, { useCallback, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import TableRow from "./TableRow";
import styled from "styled-components";
import {
  itemSelected,
  onItemSelected,
} from "@/redux/search/newappointment-slice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #d1d1d1;
`;

const StyledThead = styled.thead`
  background-color: #1a202c;
  color: white;
`;

const StyledTbody = styled.tbody`
  color: #374151;
  tr:nth-of-type(odd) {
    background-color: #cbd5e1;
  }

  tr:nth-of-type(even) {
    background-color: #e2e8f0;
  }
`;

type Props = {
  data: [any];
  headers: [string];
  selectAvailble?: boolean;
};

const Table = ({ data, headers, selectAvailble = false }: Props) => {
  const [selectedKey, setSelectedKey] = useState<number | string>(0);
  const anyItemSelected = useSelector(itemSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setSelectedKey(0);
      dispatch(onItemSelected(false));
    };
  }, []);

  const onRowSelected = useCallback((key: number | string) => {
    setSelectedKey(key);
    dispatch(onItemSelected(true));
  }, []);

  return (
    <Container>
      <StyledTable>
        <StyledThead>
          <TableHeader
            headers={headers}
            icon={
              selectAvailble
                ? anyItemSelected
                  ? faSquareCheck
                  : faSquare
                : null
            }
          />
        </StyledThead>
        <StyledTbody>
          {data?.map((rowValue: any) => {
            const icon = selectAvailble
              ? rowValue?.id == selectedKey
                ? faSquareCheck
                : faSquare
              : null;
            return (
              <TableRow
                key={rowValue?.id}
                data={rowValue}
                icon={icon}
                onRowSelected={selectAvailble ? onRowSelected : null}
                headers={headers}
              />
            );
          })}
        </StyledTbody>
      </StyledTable>
    </Container>
  );
};

export default Table;
