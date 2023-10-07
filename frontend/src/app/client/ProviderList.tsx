"use client";

import React, { useEffect, useState } from "react";
import Table from "@/components/commons/Table";
import { GET } from "../sign-up/api/token/route";
import { NextRequest } from "next/server";

const ProviderList = () => {
  const [data, setData] = useState<any>([]);
  const [headers, setHeaders] = useState<any>([]);

  useEffect(() => {
    GET(new NextRequest("http://localhost:8000/provider/getAll"))
      .then((results) => results.json())
      .then((res) => {
        const json = res.data;
        json && setHeaders(Object.keys(json[0]));
        setData(json);
      });
  }, []);

  return <Table data={data} headers={headers} selectAvailble />;
};

export default ProviderList;
