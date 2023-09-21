import styles from "./styles/container.module.css";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.viewPort}>{children}</div>;
};

export default Container;
