// Need to dynamically set the spans according to items in json
// Must iterate over data and find entries that have hint set to "Business Unit"
"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// import data from "../../data/data.json";
import { getDatafromJson } from "@/actions/getDatafromJson";
import BusinessUnitBox from "./BusinessUnitBox";

export default function BusinessUnitBar() {
  // // Iterate over data of json file
  // const elements = [];
  // const entries = data.data;
  // for (let entry of entries){
  //   if(entry.hint === "Business Unit"){
  //     // Create the markup to be injected based on entry label info.
  //     elements.push(
  //         <span className="pl-2 hover:text-gray-300 border-r pr-2">{entry.label}</span>
  //       );
  //   }
  // }

  const [businessUnits, setBusinessUnits] = useState<any>([]);

  useEffect(() => {
    const json = getDatafromJson();
    const businessUnits = json.data;
    setBusinessUnits([...businessUnits]);
  }, []);

  const params = useSearchParams();
  const businessUnit = params?.get("businessUnit");

  // Business unit span labels are set based on markup made from JSON data.
  return (
    <div
      id="unitbar-container"
      className="flex flex-row itms-center py-3 gap-3"
    >
      {businessUnits.map((bu: any) => (
        <BusinessUnitBox
          label={bu.label}
          selected={businessUnit === bu.label}
        />
      ))}
    </div>
  );
}
