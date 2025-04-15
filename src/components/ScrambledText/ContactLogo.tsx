import { useContext } from "react";
import styles from "./ContactLogo.module.css";
import { ThemeContext } from "../../contexts/ThemeProvider";

export default function ContactLogo() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <h1 className={`${styles["title"]} ${isDarkMode && styles['dark']}`}>
      <div className={styles["placeholder"]}>contact</div>
      <p className={`${styles["text"]} ${styles["c1"]}`}>c</p>
      <p className={`${styles["text"]} ${styles["o"]}`}>o</p>
      <p className={`${styles["text"]} ${styles["n"]}`}>n</p>
      <p className={`${styles["text"]} ${styles["t1"]}`}>t</p>
      <p className={`${styles["text"]} ${styles["a"]}`}>a</p>
      <p className={`${styles["text"]} ${styles["c2"]}`}>c</p>
      <p className={`${styles["text"]} ${styles["t2"]}`}>t</p>
    </h1>
  );
}
