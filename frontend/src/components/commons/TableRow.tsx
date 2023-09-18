"use client";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const TR = styled.tr`
  width: 100%;
  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: height 0.3s ease;

  &:hover {
    white-space: normal;
    overflow: visible;
    word-wrap: break-word;
  }
`;

const TableCell = styled.td`
  font-size: 1.2em;
  white-space: inherit;
  overflow: inherit;
  text-overflow: inherit;
`;

type TableRowProps = {
  data: any;
  headers: [string];
  onRowSelected: ((key: number | string) => void) | null;
  icon: IconDefinition | null;
};

const TableRow: React.FC<TableRowProps> = ({
  data,
  icon,
  onRowSelected,
  headers,
}) => {
  const onClickHandler = () => {
    onRowSelected && onRowSelected(data.id);
  };
  return (
    <TR onClick={onClickHandler}>
      {icon && <TableCell>{<FontAwesomeIcon icon={icon} />}</TableCell>}
      {headers?.map((header: string, index: any) => {
        return <TableCell key={index}>{data[header]}</TableCell>;
      })}
    </TR>
  );
};

export default TableRow;
