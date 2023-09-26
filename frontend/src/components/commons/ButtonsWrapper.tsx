import { ReactNode } from "react";
import styles from "./styles/buttonWraper.module.css";

interface MyComponentProps {
  children: ReactNode;
}

const ButtonsWrapper = ({ children }: MyComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div>{children} </div>
    </div>
  );
};

export default ButtonsWrapper;
