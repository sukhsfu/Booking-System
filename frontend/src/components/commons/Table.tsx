"use client";
import React, { useCallback, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import { getDatafromJson } from "@/actions/getDatafromJson";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import TableRow from "./TableRow";
import styled from "styled-components";

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

type Props = {};
type DataProps = {
  providerId: string | number;
  name: string;
  email: string;
  phone: string;
  service: string;
  price: string;
  address: string;
};

const Table = (props: Props) => {
  const [data, setData] = useState<any>([]);
  const [selectedKey, setSelectedKey] = useState<number | string>(0);
  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    const json = getDatafromJson();
    setData(json);
  }, []);

  const onRowSelected = useCallback((key: number | string) => {
    setSelectedKey(key);
    setItemSelected(true);
  }, []);

  return (
    <Container>
      <StyledTable>
        <StyledThead>
          <TableHeader icon={itemSelected ? faSquareCheck : faSquare} />
        </StyledThead>
        <StyledTbody>
          {data?.map((rowValue: DataProps) => {
            const icon =
              rowValue?.providerId == selectedKey ? faSquareCheck : faSquare;
            return (
              <TableRow
                key={rowValue?.providerId}
                {...rowValue}
                icon={icon}
                onRowSelected={onRowSelected}
              />
            );
          })}
        </StyledTbody>
      </StyledTable>
    </Container>
  );
};

export default Table;
