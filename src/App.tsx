import { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";
// import Experience from "./sections/Experience";
// import Testimonials from "./sections/Testimonials";
// import Contact from "./sections/Contact";

function App() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-100 w-8 h-8 rounded-full bg-white mix-blend-difference"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${
            cursorPosition.y - 16
          }px)`,
        }}
      ></div>

      {/* Botón Global de Idioma */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleLanguage}
          className="text-3xl text-gray-400 cursor-pointer hover:text-white transition"
          title={language === "es" ? "Switch to english" : "Cambiar a español"}
        >
          {language === "es" ? "🗽" : "💃"}
        </button>
      </div>

      {/* Secciones */}
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
