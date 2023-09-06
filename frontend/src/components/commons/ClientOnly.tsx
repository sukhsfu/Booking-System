"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const XX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const ClientOnly: React.FC<Props> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <XX>{children}</XX>;
};

export default ClientOnly;
