import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ color: "#1E3050" }}
          size="5x"
        />
      </div>
      <h1>Appointment Booking System</h1>
    </nav>
  );
};

export default Navbar;
