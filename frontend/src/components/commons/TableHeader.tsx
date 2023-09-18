"use client";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const HeaderRow = styled.tr`
  background-color: #334155;
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  th {
    padding: 0.75rem 1rem;
  }
`;

type Props = {
  icon: IconDefinition | null;
  headers: [string];
};

const TableHeader: React.FC<Props> = ({ icon, headers }) => {
  return (
    <HeaderRow>
      {icon && <th>{<FontAwesomeIcon icon={icon} />}</th>}
      {headers?.map((header: string, index) => {
        header = header.replace(/\bid\b/g, "providerId");
        header = header.replace(/([A-Z])/g, " $1");
        header = header.replace(/^\w/, (match) => match.toUpperCase());
        return <th key={index}>{header}</th>;
      })}
    </HeaderRow>
  );
};

export default TableHeader;
