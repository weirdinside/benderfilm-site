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
  
  const isActive = (name: Name) => activeName === name || activeName === "";

  const people = [
    {
      name: "Michael",
      Component: MichaelRees,
      reel: "https://vimeo.com/56547394",
    },
    {
      name: "Alex",
      Component: AlexSovoda,
      reel: "https://vimeo.com/56547394",
    },
    {
      name: "Maddie",
      Component: MaddieGwinn,
      reel: "https://vimeo.com/56547394",
    },
    {
      name: "Andy",
      Component: AndyRuse,
      reel: "https://vimeo.com/56547394",
    },
  ] as const;

  return (
    <div
      className={`${styles["roster"]} ${isDarkMode && styles["dark"]} ${
        activeName && styles["active"]
      }`}
    >
      <div className={styles["list"]}>
        {people.map(({ name, Component, reel }) => (
          <div
            key={name}
            className={`${styles["name"]} ${
              !isActive(name) && styles["hidden"]
            }`}
          >
            <div
              onMouseEnter={() => {
                if (activeName === "") setIsHovering(true);
              }}
              onMouseLeave={() => {
                if (activeName === "") setIsHovering(false);
              }}
              onClick={() => {
                if (activeName === "") {
                  setIsHovering(false);
                  setActiveName(name);
                }
              }}
              className={styles["name__title"]}
            >
              <Component active={activeName === name} />
              <div
                onClick={() => {
                  console.log(activeName);
                  setActiveName("");
                }}
                onMouseEnter={() => {
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
                className={`${styles["close"]} ${
                  activeName === name && styles["visible"]
                }`}
              >
                ✕
              </div>
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
                  {activeName === name && (
                    <iframe
                      src={`https://player.vimeo.com/video/${reel.match(
                        /\d+/
                      )}?badge=0&amp;autopause=0&amp`}
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
                    />
                  )}
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
                and <span style={{ fontWeight: "800" }}>Getting Mad High.</span>{" "}
                To work with them, please contact kyle@benderfilm.com
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
