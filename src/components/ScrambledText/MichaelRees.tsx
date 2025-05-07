import styles from "./MichaelRees.module.css";

export default function MichaelRees({active}: {active: boolean}) {
  return (
    <h1 className={`${styles["title"]} ${active && styles['active']}`}>
      <div className={styles["placeholder"]}>Michael Rees</div>
      <p className={`${styles["text"]} ${styles["m"]}`}>M</p>
      <p className={`${styles["text"]} ${styles["i"]}`}>i</p>
      <p className={`${styles["text"]} ${styles["c"]}`}>c</p>
      <p className={`${styles["text"]} ${styles["h"]}`}>h</p>
      <p className={`${styles["text"]} ${styles["a"]}`}>a</p>
      <p className={`${styles["text"]} ${styles["e1"]}`}>e</p>
      <p className={`${styles["text"]} ${styles["l"]}`}>l</p>
      <p className={`${styles["text"]} ${styles["r"]}`}>R</p>
      <p className={`${styles["text"]} ${styles["e2"]}`}>e</p>
      <p className={`${styles["text"]} ${styles["e3"]}`}>e</p>
      <p className={`${styles["text"]} ${styles["s"]}`}>s</p>
    </h1>
  );
}
