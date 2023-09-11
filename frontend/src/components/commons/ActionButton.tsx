"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
  disabled?: boolean;
}

const StyledActionButton = styled.div<ActionButtonProps>`
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
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowd" : "allowed")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    opacity: 0.9;
  }
`;

const ActionButton = ({
  label,
  link,
  icon,
  disabled,
}: {
  label: string;
  link: string;
  icon: JSX.Element;
  disabled: boolean;
}) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(link);
  };

  return (
    <StyledActionButton onClick={onClickHandler} disabled={disabled}>
      {icon}
      {label}
    </StyledActionButton>
  );
};

export default ActionButton;
