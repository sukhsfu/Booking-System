import Button from "@/components/commons/Button";
import ButtonsWrapper from "@/components/commons/ButtonsWrapper";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <ButtonsWrapper>
      <p className={styles.homepage}> Do you want to login as?</p>
      <Button link="/login/?type=provider"> Service Provider</Button>
      <Button link="/login/?type=client"> Client</Button>
    </ButtonsWrapper>
  );
};

export default HomePage;
