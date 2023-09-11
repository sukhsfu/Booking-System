"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

const StyledActionButton = styled.div`
  background-color: #334155;
  color: white;
  padding: 0.75rem 3rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  display: inline-flex;
  flex-shrink: 0;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ActionButton = ({
  label,
  link,
  icon,
}: {
  label: string;
  link: string;
  icon: JSX.Element;
}) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(link);
  };

  return (
    <StyledActionButton onClick={onClickHandler}>
      {icon}
      {label}
    </StyledActionButton>
  );
};

export default ActionButton;
