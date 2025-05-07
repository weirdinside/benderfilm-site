import styles from "./MaddieGwinn.module.css";

export default function MaddieGwinn({active}: {active: boolean}) {
  return (
    <h1 className={`${styles["title"]} ${active && styles['active']}`}>
      <div className={styles["placeholder"]}>Maddie Gwinn</div>
      <p className={`${styles["text"]} ${styles["m"]}`}>M</p>
      <p className={`${styles["text"]} ${styles["a"]}`}>a</p>
      <p className={`${styles["text"]} ${styles["d1"]}`}>d</p>
      <p className={`${styles["text"]} ${styles["d2"]}`}>d</p>
      <p className={`${styles["text"]} ${styles["i1"]}`}>i</p>
      <p className={`${styles["text"]} ${styles["e"]}`}>e</p>
      <p className={`${styles["text"]} ${styles["g"]}`}>G</p>
      <p className={`${styles["text"]} ${styles["w"]}`}>w</p>
      <p className={`${styles["text"]} ${styles["i2"]}`}>i</p>
      <p className={`${styles["text"]} ${styles["n1"]}`}>n</p>
      <p className={`${styles["text"]} ${styles["n2"]}`}>n</p>
    </h1>
  );
}
