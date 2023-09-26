"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/button.module.css";

interface MyComponentProps {
  children: ReactNode;
  link: string;
}

const Button = ({ children, link }: MyComponentProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(link);
  };
  return (
    <>
      <button
        className={styles.wrapperButton}
        type="button"
        onClick={onClickHandler}
      >
        <p>{children}</p>
      </button>
    </>
  );
};

export default Button;
