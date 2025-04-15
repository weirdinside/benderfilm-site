import { useContext } from "react";
import styles from "./AboutLogo.module.css";
import { ThemeContext } from "../../contexts/ThemeProvider";

export default function AboutLogo() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <h1 className={`${styles["title"]} ${isDarkMode && styles['dark']}`}>
      <div className={styles["placeholder"]}>about</div>
      <p className={`${styles["text"]} ${styles["a"]}`}>a</p>
      <p className={`${styles["text"]} ${styles["b"]}`}>b</p>
      <p className={`${styles["text"]} ${styles["o"]}`}>o</p>
      <p className={`${styles["text"]} ${styles["u"]}`}>u</p>
      <p className={`${styles["text"]} ${styles["t"]}`}>t</p>
    </h1>
  );
}
