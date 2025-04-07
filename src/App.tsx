import { useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";
// import Experience from "./sections/Experience";
// import Testimonials from "./sections/Testimonials";
// import Contact from "./sections/Contact";

function App() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <>
      {/* Botón Global de Idioma */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleLanguage}
          className="text-sm text-gray-400 hover:text-white transition"
        >
          {language === "es" ? "🌐 English" : "🌐 Español"}
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
