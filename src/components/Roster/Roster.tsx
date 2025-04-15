import AlexSovoda from "../ScrambledText/AlexSovoda";
import MaddieGwinn from "../ScrambledText/MaddieGwinn";
import MichaelRees from "../ScrambledText/MichaelRees";
import AndyRuse from "../ScrambledText/AndyRuse";
import styles from "./Roster.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

export default function Roster() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${styles["roster"]} ${isDarkMode && styles['dark']}`}>
      <div className={styles["list"]}>
        <div className={styles["name"]}>
          <MichaelRees />
        </div>
        <div className={styles["name"]}>
          <AlexSovoda />
        </div>
        <div className={styles["name"]}>
          <MaddieGwinn />
        </div>
        <div className={styles["name"]}>
          <AndyRuse />
        </div>
      </div>
    </div>
  );
}
