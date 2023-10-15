"use client";

import React, { useEffect, useState } from "react";
import Table from "@/components/commons/Table";
import { NextRequest } from "next/server";

const ProviderList = () => {
  const [data, setData] = useState<any>([]);
  const [headers, setHeaders] = useState<any>([]);

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `http://${host}`;

    fetch(new NextRequest(`${baseUrl}/protected/client/search`))
      .then((results) => results.json())
      .then((res) => {
        res && setHeaders(Object.keys(res[0]));
        setData(res);
      });
  }, []);

  return <Table data={data} headers={headers} selectAvailble />;
};

export default ProviderList;
