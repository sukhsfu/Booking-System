import styles from "./styles/topBarNavigation.module.css";
import Link from "next/link";

type Props = {
  children: string;
  link: string;
};

const TopBarNavigation = ({ children, link }: Props) => {
  return (
    <Link href={link} className={styles.topBar}>
      {children}
    </Link>
  );
};

export default TopBarNavigation;
