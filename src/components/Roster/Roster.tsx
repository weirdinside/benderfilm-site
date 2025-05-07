import AlexSovoda from "../ScrambledText/AlexSovoda";
import MaddieGwinn from "../ScrambledText/MaddieGwinn";
import MichaelRees from "../ScrambledText/MichaelRees";
import AndyRuse from "../ScrambledText/AndyRuse";
import styles from "./Roster.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

type Name = "" | "Michael" | "Alex" | "Maddie" | "Andy";

export default function Roster({
  setIsHovering,
}: {
  setIsHovering: (arg0: boolean) => void;
}) {
  const { isDarkMode } = useContext(ThemeContext);
  const [activeName, setActiveName] = useState("");

  function toggleActiveName(name: Name) {
    if (activeName === name) return setActiveName("");
    return setActiveName(name);
  }

  const isActive = (name: string) => {
    if (activeName === name || activeName === "") return true;
    return false;
  };

  return (
    <div
      className={`${styles["roster"]} ${isDarkMode && styles["dark"]} ${
        activeName && styles["active"]
      }`}
    >
      <div className={styles["list"]}>
        <div
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          onClick={() => {
            toggleActiveName("Michael");
          }}
          className={`${styles["name"]} ${
            !isActive("Michael") && styles["hidden"]
          }`}
        >
          <MichaelRees active={activeName === "Michael"} />
          <div
            className={`${styles["about"]} ${
              !(activeName === "Michael") && styles["hidden"]
            }`}
          >
            <div className={styles["showreel"]}>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
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
              This is a little bit about filmmaker Michael Rees. He has been
              working in this industry for quite a while now and makes badass
              shit. He specializes in <span style={{fontWeight: '800'}}>Smoking weed, Turning Up,</span> and <span style={{fontWeight: '800'}}>Getting Mad High.</span> To work with him, please contact kyle@benderfilm.com
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          onClick={() => {
            toggleActiveName("Alex");
          }}
          className={`${styles["name"]} ${
            !isActive("Alex") && styles["hidden"]
          }`}
        >
          <AlexSovoda active={activeName === "Alex"} />
          <div
            className={`${styles["about"]} ${
              !(activeName === "Alex") && styles["hidden"]
            }`}
          >
            <div className={styles["showreel"]}>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
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
              This is a little bit about filmmaker Alex Sovoda. He has been
              working in this industry for quite a while now and makes badass
              shit. He specializes in <span style={{fontWeight: '800'}}>Smoking weed, Turning Up,</span> and <span style={{fontWeight: '800'}}>Getting Mad High.</span> To work with him, please contact kyle@benderfilm.com
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          onClick={() => {
            toggleActiveName("Maddie");
          }}
          className={`${styles["name"]} ${
            !isActive("Maddie") && styles["hidden"]
          }`}
        >
          <MaddieGwinn active={activeName === "Maddie"} />
          <div
            className={`${styles["about"]} ${
              !(activeName === "Maddie") && styles["hidden"]
            }`}
          >
            <div className={styles["showreel"]}>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
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
              This is a little bit about filmmaker Maddie Gwinn. She has been
              working in this industry for quite a while now and makes badass
              shit. She specializes in <span style={{fontWeight: '800'}}>Smoking weed, Turning Up,</span> and <span style={{fontWeight: '800'}}>Getting Mad High.</span> To work with her, please contact kyle@benderfilm.com
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          onClick={() => {
            toggleActiveName("Andy");
          }}
          className={`${styles["name"]} ${
            !isActive("Andy") && styles["hidden"]
          }`}
        >
          <AndyRuse active={activeName === "Andy"} />
          <div
            className={`${styles["about"]} ${
              !(activeName === "Andy") && styles["hidden"]
            }`}
          >
            <div className={styles["showreel"]}>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
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
              This is a little bit about filmmaker Andy Ruse. He has been
              working in this industry for quite a while now and makes badass
              shit. He specializes in <span style={{fontWeight: '800'}}>Smoking weed, Turning Up,</span> and <span style={{fontWeight: '800'}}>Getting Mad High.</span> To work with him, please contact kyle@benderfilm.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
