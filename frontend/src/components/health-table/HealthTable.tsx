"use client";
import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import { getDatafromJson } from "@/actions/getDatafromJson";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";

type Props = {};

const HealthTable = (props: Props) => {
  const params = useSearchParams();
  let currentQuery: any = {};

  const [businessUnit, setBusinessUnit] = useState<any>({});

  useEffect(() => {
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    console.log(currentQuery);
    const json = getDatafromJson();
    const businessUnit = json.data.find(
      (businessUnit) => businessUnit.label === currentQuery.businessUnit
    );
    setBusinessUnit({ ...businessUnit });
  }, [params]);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full bg-slate-200 rounded-md shadow-md border-separate border border-slate-500">
        <thead className="">
          <TableHeader />
        </thead>
        <tbody className="text-gray-700">
          {businessUnit?.data?.map((product: any) =>
            product.data.map((application: any) =>
              application.data.map((service: any) => (
                <tr
                  key={`${product.label}-${application.label}-${service.label}`}
                >
                  <td>{product.label}</td>
                  <td>{application.label}</td>
                  <td>{service.label}</td>
                  <td>RSS</td>
                  {Object.keys(service.status).map((date: string) => (
                    <td key={date}>{service.status[date]?.value || "-"}</td>
                  ))}
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HealthTable;
