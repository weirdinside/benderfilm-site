import { useContext } from "react";
import styles from "./About.module.css";
import { ThemeContext } from "../../contexts/ThemeProvider";

export default function About({setIsHovering}: {setIsHovering: (arg0: boolean) => void}) {
  console.log(setIsHovering)
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles["about"]} ${isDarkMode && styles["dark"]}`}>
      Bender Film is a creative film studio dedicated to producing bold,
      original stories with a strong visual identity. Known for its distinctive
      voice and cinematic flair, the studio works across genres to develop
      feature films, documentaries, and experimental projects. Bender Film
      collaborates closely with visionary directors and writers to bring fresh
      perspectives to the screen. With a passion for storytelling and a
      commitment to quality, the studio aims to challenge conventions and leave
      a lasting impact on audiences.
    </div>
  );
}
