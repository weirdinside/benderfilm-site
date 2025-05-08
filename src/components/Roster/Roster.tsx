import AlexSovoda from "../ScrambledText/AlexSovoda";
import MaddieGwinn from "../ScrambledText/MaddieGwinn";
import MichaelRees from "../ScrambledText/MichaelRees";
import AndyRuse from "../ScrambledText/AndyRuse";
import styles from "./Roster.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

type Name = "" | "Michael" | "Alex" | "Maddie" | "Andy";

export default function Roster({
  setCursorVisible,
  setIsHovering,
}: {
  setCursorVisible: (arg0: boolean) => void;
  setIsHovering: (arg0: boolean) => void;
}) {
  const { isDarkMode } = useContext(ThemeContext);
  const [activeName, setActiveName] = useState<Name>("");

  const isPointerCoarse = window.matchMedia("(pointer:coarse)").matches;

  function toggleActiveName(name: Name) {
    setActiveName(prev => (prev === name ? "" : name));
  }

  const isActive = (name: Name) => activeName === name || activeName === "";

  const people = [
    {
      name: "Michael",
      Component: MichaelRees,
      reel: ""
    },
    {
      name: "Alex",
      Component: AlexSovoda,
      reel: ""
    },
    {
      name: "Maddie",
      Component: MaddieGwinn,
      reel: ""
    },
    {
      name: "Andy",
      Component: AndyRuse,
      reel: ""
    },
  ] as const;

  return (
    <div
      className={`${styles["roster"]} ${isDarkMode && styles["dark"]} ${
        activeName && styles["active"]
      }`}
    >
      <div className={styles["list"]}>
        {people.map(({ name, Component }) => (
          <div
            key={name}
            className={`${styles["name"]} ${!isActive(name) && styles["hidden"]}`}
          >
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => toggleActiveName(name)}
              className={styles["name__title"]}
            >
              <Component active={activeName === name} />
            </div>

            <div
              className={`${styles["about"]} ${
                activeName !== name && styles["hidden"]
              }`}
            >
              <div className={styles["showreel"]}>
                <div
                  onMouseEnter={() => setCursorVisible(false)}
                  onMouseLeave={() => {
                    if (!isPointerCoarse) setCursorVisible(true);
                  }}
                  onMouseDown={() => setCursorVisible(false)}
                  style={{ padding: "56.25% 0 0 0", position: "relative" }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/56547394?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    style={{
                      zIndex: "2",
                      border: "0px",
                      position: "absolute",
                      top: "0",
                      cursor: "none",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    title="Timelapse"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
              <div className={styles["description"]}>
                This is a little bit about filmmaker {name}. They have been
                working in this industry for quite a while now and make badass
                shit. They specialize in{" "}
                <span style={{ fontWeight: "800" }}>
                  Smoking weed, Turning Up,
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: "800" }}>Getting Mad High.</span>{" "}
                To work with them, please contact kyle@benderfilm.com
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
