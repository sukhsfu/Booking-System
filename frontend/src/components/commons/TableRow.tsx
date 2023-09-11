"use client";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconLookup,
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-common-types";

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

type IconProp = IconName | [IconPrefix, IconName] | IconLookup;

type TableRowProps = {
  providerId: string | number;
  name: string;
  email: string;
  phone: string;
  service: string;
  price: string;
  address: string;
  onRowSelected: (key: number | string) => void;
  icon: IconProp;
};

const TableRow: React.FC<TableRowProps> = ({
  providerId,
  name,
  email,
  phone,
  service,
  price,
  address,
  icon,
  onRowSelected,
}) => {
  const onClickHandler = () => {
    onRowSelected(providerId);
  };
  return (
    <TR onClick={onClickHandler}>
      <TableCell>{<FontAwesomeIcon icon={icon} />}</TableCell>
      <TableCell>{providerId}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{service}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{address}</TableCell>
    </TR>
  );
};

export default TableRow;
