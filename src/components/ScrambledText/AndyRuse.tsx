import styles from "./AndyRuse.module.css";

export default function AndyRuse() {
  return (
    <h1 className={styles["title"]}>
      <div className={styles["placeholder"]}>Andy Ruse</div>
      <p className={`${styles["text"]} ${styles["a"]}`}>A</p>
      <p className={`${styles["text"]} ${styles["n"]}`}>n</p>
      <p className={`${styles["text"]} ${styles["d"]}`}>d</p>
      <p className={`${styles["text"]} ${styles["y"]}`}>y</p>
      <p className={`${styles["text"]} ${styles["r"]}`}>R</p>
      <p className={`${styles["text"]} ${styles["u"]}`}>u</p>
      <p className={`${styles["text"]} ${styles["s"]}`}>s</p>
      <p className={`${styles["text"]} ${styles["e"]}`}>e</p>
    </h1>
  );
}
