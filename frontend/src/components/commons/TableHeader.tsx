"use client";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconLookup,
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-common-types";

const HeaderRow = styled.tr`
  background-color: #334155;
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  th {
    padding: 0.75rem 1rem;
  }
`;

type IconProp = IconName | [IconPrefix, IconName] | IconLookup;
type Props = {
  icon: IconProp;
};

const TableHeader: React.FC<Props> = ({ icon }) => {
  return (
    <HeaderRow>
      <th>{<FontAwesomeIcon icon={icon} />}</th>
      <th>Provider Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Service</th>
      <th>Price</th>
      <th>Address</th>
    </HeaderRow>
  );
};

export default TableHeader;
