import React from "react";

import styles from "./styles.module.css";
import Table from "@/components/commons/Table";
import { NextRequest } from "next/server";

const fetchData = async (request: NextRequest) => {
  return fetch(request, { cache: "no-store" })
    .then((result) => {
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      return result.json();
    })
    .then((json) => {
      if (!json) {
        return { data: null, headers: null };
      }
      return {
        data: json,
        headers: Object.keys(json[0]).filter((header) => header !== "id"),
      };
    })
    .catch((err) => {
      console.log(err);
      return { data: null, headers: null };
    });
};
type Props = {
  request: NextRequest;
};
const BookedAppointment: React.FC<Props> = async ({ request }) => {
  const { data, headers }: any = await fetchData(request);
  const fail = !data || !headers;
  return (
    <div className={styles.parent}>
      {fail && <p> No Booking Available</p>}
      <Table data={data} headers={headers} />
    </div>
  );
};

export default BookedAppointment;
