import { useContext } from "react";
import styles from "./RosterLogo.module.css";
import { ThemeContext } from "../../contexts/ThemeProvider";

export default function RosterLogo() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <h1 className={`${styles["title"]} ${isDarkMode && styles["dark"]}`}>
      <div className={styles["placeholder"]}>roster</div>
      <p className={`${styles["text"]} ${styles["r1"]}`}>r</p>
      <p className={`${styles["text"]} ${styles["o"]}`}>o</p>
      <p className={`${styles["text"]} ${styles["s"]}`}>s</p>
      <p className={`${styles["text"]} ${styles["t"]}`}>t</p>
      <p className={`${styles["text"]} ${styles["e"]}`}>e</p>
      <p className={`${styles["text"]} ${styles["r2"]}`}>r</p>
    </h1>
  );
}
