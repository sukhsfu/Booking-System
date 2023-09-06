"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const TableHeader = (props: Props) => {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const dates: string[] = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
      };
      date.setDate(currentDate.getDate() - i);
      dates.push(date.toLocaleDateString(undefined, options));
    }
    setDates(dates);
  }, []);
  console.log(dates);

  return (
    <tr>
      <th className="border border-slate-600 rounded-lg">Product</th>
      <th className="border border-slate-600 rounded-lg">Application</th>
      <th className="border border-slate-600 rounded-lg">Service</th>
      <th className="border border-slate-600 rounded-lg">RSS</th>
      {dates?.map((date) => (
        <th key={date} className="border border-slate-600 rounded-lg">
          {date}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
