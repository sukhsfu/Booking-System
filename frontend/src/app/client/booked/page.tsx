"use client";

import React, { useCallback, useEffect, useState } from "react";
import { getDatafromJson } from "@/actions/getDatafromJson-client";

import { styled } from "styled-components";
import Table from "@/components/commons/Table";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  height: 100%;
  padding: 30px;
  width: 100%;
`;

const ClientBooked = () => {
  const [data, setData] = useState<any>([]);
  const [headers, setHeaders] = useState<any>([]);

  useEffect(() => {
    const json: any[] = getDatafromJson();
    json &&
      setHeaders(Object.keys(json[0]).filter((header) => header !== "id"));
    setData(json);
  }, []);

  return (
    <Parent>
      <Table data={data} headers={headers} />
    </Parent>
  );
};

export default ClientBooked;
