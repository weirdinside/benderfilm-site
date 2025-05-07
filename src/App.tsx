import { useContext, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import About from "./components/About/About";
import Logo from "./components/Logo/Logo";
import MenuItem from "./components/Menu/MenuItem/MenuItem";
import Roster from "./components/Roster/Roster";
import AboutLogo from "./components/ScrambledText/AboutLogo";
import ContactLogo from "./components/ScrambledText/ContactLogo";
import RosterLogo from "./components/ScrambledText/RosterLogo";
import { ThemeContext } from "./contexts/ThemeProvider";
import Contact from "./components/Contact/Contact";
function App() {
  const { isDarkMode, toggleColorMode } = useContext(ThemeContext);
  const location = useLocation();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  function handleCursorAnimation(e: MouseEvent) {
    if (cursorRef.current) {
      const mousePointer = cursorRef.current;
      const deltaX = e.clientX - mousePointer.getBoundingClientRect().x;
      const deltaY = e.clientY - mousePointer.getBoundingClientRect().y;
      const angle = Math.atan2(deltaY, deltaX);
      mousePointer.animate(
        {
          rotate: `${angle * (180 / Math.PI) + 235}deg`,
        },
        { duration: 1000, fill: "forwards" }
      );
      mousePointer.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        { duration: 0, fill: "forwards" }
      );
    }
  }

  useEffect(function cursorListener() {
    window.addEventListener("mousemove", handleCursorAnimation);
    return () => {
      window.removeEventListener("mousemove", handleCursorAnimation);
    };
  }, []);

  const navigation = [
    { name: "home", link: "/" },
    { name: "roster", link: "/roster" },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ];

  return (
    <div className={`${styles["page"]} ${isDarkMode && styles["dark"]}`}>
      <div
        onClick={() => {
          toggleColorMode();
        }}
        className={`${styles["theme__toggle"]} ${isDarkMode && styles["dark"]}`}
      />
      <div className={styles["page__content"]}>
        <header className={styles["header"]}>
          {location.pathname === "/roster" && <RosterLogo />}
          {location.pathname === "/about" && <AboutLogo />}
          {location.pathname === "/contact" && <ContactLogo />}
          {navigation
            .filter((item) => {
              return item.link !== location.pathname;
            })
            .map((item) => {
              return <MenuItem setIsHovering={setIsHovering} name={item.name} link={item.link} />;
            })}
        </header>
        <div ref={cursorRef} className={`${styles["cursor"]} ${isHovering && styles['active']}`}>
          
        </div>
        <main className={styles["main"]}>
          <Routes>
            <Route path="*" element={<Logo />} />
            <Route path="roster" element={<Roster setIsHovering={setIsHovering} />} />
            <Route path="about" element={<About setIsHovering={setIsHovering}  />} />
            <Route path="contact" element={<Contact setIsHovering={setIsHovering}  />} />
          </Routes>
        </main>
        <footer className={styles["footer"]}></footer>
      </div>
    </div>
  );
}

export default App;
