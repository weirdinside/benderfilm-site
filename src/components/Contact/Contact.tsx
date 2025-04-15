import { useContext, useState } from "react";
import styles from "./Contact.module.css";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { getRandomInt } from "../../utils/utils";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles["contact"]} ${isDarkMode && styles["dark"]}`}>
      <Link
      to={"mailto:kyle@benderfilm.com"}
        onClick={() => {
          setIsHovered(false);
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={styles["cta"]}
      >
        <p className={styles["hidden-email"]}>kyle@benderfilm.com</p>
        {`Send us an email.`.split("").map((char, idx) => {
          return (
            <p
              key={idx}
              style={
                isHovered
                  ? {
                      rotate: `${getRandomInt(100) - 50}deg`,
                      transform: `translateY(${getRandomInt(200) - 100}%)`,
                      margin: `0px ${getRandomInt(4)}%`,
                    }
                  : {}
              }
              className={`${styles["cta__char"]}`}
            >
              {char === " " ? "\u00A0" : char}
            </p>
          );
        })}
      </Link>
    </div>
  );
}
