import { useContext, useState } from "react";
import { getRandomInt } from "../../../utils/utils";
import styles from "./MenuItem.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeProvider";

export default function MenuItem({
  name,
  link,
  setIsHovering
}: {
  name: string;
  link: string;
  setIsHovering: (arg0: boolean)=>void;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setIsHovering(false);
        setIsHovered(false);
      }}
      onMouseOver={() => {
        setIsHovering(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsHovered(false);
      }}
      className={`${styles["menu__item"]} ${isDarkMode && styles['dark']}`}
    >
      <p className={styles["solid"]}>{name}</p>
      <NavLink
        className={`${styles["float"]} ${isDarkMode && styles['dark']}`}
        style={{ width: "max-content" }}
        to={link}
      >
        {name.split("").map((char) => {
          return (
            <p
              style={
                isHovered
                  ? {
                      rotate: `${getRandomInt(50) - 25}deg`,
                      scale: "1.2",
                      transform: `translateY(${getRandomInt(20) - 10}%)`,
                      margin: `0px ${getRandomInt(4)}%`,
                    }
                  : {}
              }
              className={`${styles["menu__char"]}`}
            >
              {char}
            </p>
          );
        })}
      </NavLink>
    </div>
  );
}
