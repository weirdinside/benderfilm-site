import { useContext, useRef, useState } from "react";
import styles from "./Logo.module.css";

import b from "/logo_layers/b.png";
import d from "/logo_layers/d.png";
import e1 from "/logo_layers/e1.png";
import e2 from "/logo_layers/e2.png";
import n from "/logo_layers/n.png";
import r from "/logo_layers/r.png";

import landing from "/logo_layers/landing marker.png";
import streak1 from "/logo_layers/streak1.png";
import streak2 from "/logo_layers/streak2.png";

import ball from "/logo_layers/ball.png";

import { ThemeContext } from "../../contexts/ThemeProvider";
import film from "/logo_layers/film-text.png";

import editorial from '/logo_layers/editorial.png'

export default function Logo() {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const logoRef = useRef<HTMLDivElement>(null);

  const { isDarkMode } = useContext(ThemeContext);

  // const [noiseSeed, setNoiseSeed] = useState(0);

  // useEffect(() => {
  //   const animationInterval = setInterval(() => {
  //     setNoiseSeed((prevSeed) => (prevSeed + 1) % 100);
  //   }, 10);

  //   return () => clearInterval(animationInterval);
  // }, []);

  function replayAnimation() {
    setAnimationKey((prev) => prev + 1);

    if (logoRef.current) {
      const container = logoRef.current;
      const logoElements = container.querySelectorAll(`.${styles.logo}`);
      logoElements.forEach((el) => {
        el.classList.add(styles.reset);
      });

      void container.offsetWidth; // just nonsense trickery bullshit, forces the func to stop here before proceeding

      setTimeout(() => {
        logoElements.forEach((el) => {
          el.classList.remove(styles.reset);
        });
      }, 10);
    }
    setIsHovering(false);
  }

  return (
    <div
      className={`${styles["logo-container"]} ${
        isHovering ? styles["hover"] : ""
      }`}
      key={animationKey}
    >
      {/* <div className={styles["noise"]}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              seed={noiseSeed}
              type=""
              baseFrequency="4"
              numOctaves="10"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div> */}
      <img className={`${styles["logo"]} ${styles["b"]}`} src={b} alt="b" />
      <img className={`${styles["logo"]} ${styles["e1"]}`} src={e1} alt="e" />
      <img className={`${styles["logo"]} ${styles["n"]}`} src={n} alt="n" />
      <img className={`${styles["logo"]} ${styles["d"]}`} src={d} alt="d" />
      <img className={`${styles["logo"]} ${styles["e2"]}`} src={e2} alt="e" />
      <img className={`${styles["logo"]} ${styles["r"]}`} src={r} alt="r" />

      <img
        className={`${styles["logo"]} ${styles["s1"]} ${!isDarkMode && styles['light']}`}
        src={streak1}
        alt="streak"
      />
      <img
        className={`${styles["logo"]} ${styles["s2"]} ${!isDarkMode && styles['light']}`}
        src={streak2}
        alt="streak"
      />

      <img
        className={`${styles["logo"]} ${styles["landing"]} ${!isDarkMode && styles['light']}`}
        src={landing}
        alt="landing"
      />
      <img
        className={`${styles["logo"]} ${styles["film"]}`}
        src={film}
        alt="film"
      />
      <img className={styles['editorial-img']} src={editorial} alt="editorial"/>
      <div
        ref={logoRef}
        onClick={replayAnimation}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        className={styles["mousearea"]}
      />
      <img
        className={`${styles["logo"]} ${styles["ball"]}`}
        src={ball}
        alt="ball"
      />
    </div>
  );
}
