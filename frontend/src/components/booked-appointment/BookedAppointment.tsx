import React from "react";

import styles from "./styles.module.css";
import Table from "@/components/commons/Table";

const fetchData = async (url: string) => {
  return fetch(url)
    .then((result) => result.json())
    .then((json) => {
      if (!json) {
        return { data: null, headers: null };
      }
      return {
        data: json,
        headers: Object.keys(json[0]).filter((header) => header !== "id"),
      };
    });
};
type Props = {
  url: string;
};
const BookedAppointment: React.FC<Props> = async ({ url }) => {
  const { data, headers }: any = await fetchData(url);
  return (
    <div className={styles.parent}>
      <Table data={data} headers={headers} />
    </div>
  );
};

export default BookedAppointment;
