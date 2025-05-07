import styles from "./AlexSovoda.module.css";

export default function AlexSovoda({ active }: { active: boolean }) {
  return (
    <h1 className={`${styles["title"]} ${active && styles["active"]}`}>
      <div className={styles["placeholder"]}>Alex Sovoda</div>
      <p className={`${styles["text"]} ${styles["a1"]}`}>A</p>
      <p className={`${styles["text"]} ${styles["l"]}`}>l</p>
      <p className={`${styles["text"]} ${styles["e"]}`}>e</p>
      <p className={`${styles["text"]} ${styles["x"]}`}>x</p>
      <p className={`${styles["text"]} ${styles["s"]}`}>S</p>
      <p className={`${styles["text"]} ${styles["o1"]}`}>o</p>
      <p className={`${styles["text"]} ${styles["v"]}`}>v</p>
      <p className={`${styles["text"]} ${styles["o2"]}`}>o</p>
      <p className={`${styles["text"]} ${styles["d"]}`}>d</p>
      <p className={`${styles["text"]} ${styles["a2"]}`}>a</p>
    </h1>
  );
}
