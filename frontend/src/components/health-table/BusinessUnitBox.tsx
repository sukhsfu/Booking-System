"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import queryString from "query-string";

type Props = {
  label: string;
  selected: boolean;
};

const BusinessUnitBox: React.FC<Props> = ({ label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    console.log(params);
    console.log(currentQuery);

    const updatedQuery: any = {
      ...currentQuery,
      businessUnit: label,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`
                    flex 
                    flex-row 
                    items-center 
                    justify-center 
                    p-1 
                    border-b-2 
                    hover:text-neutral-800 
                    transition 
                    cursor-pointer
                    ${
                      selected
                        ? "border-white-neutral-800"
                        : "border-transparent"
                    }
                    ${selected ? "text-neutral-800" : "text-neutral-500"}
                `}
    >
      <div className="font-medium text-md text-white">{label}</div>
    </div>
  );
};

export default BusinessUnitBox;
