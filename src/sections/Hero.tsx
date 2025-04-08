import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, ChevronDown } from "lucide-react";
interface HeroProps {
  language: "es" | "en";
}

export default function HeroSection({ language }: HeroProps) {
  const content = {
    es: {
      greeting: "Hola, soy Manuel 👋",
      title: "Desarrollador Frontend",
      description:
        "Especializado en crear experiencias digitales escalables, intuitivas y centradas en el usuario. Utilizo tecnologías modernas como React, TypeScript y Node.js para construir productos robustos que combinan diseño y funcionalidad.",
      projects: "Ver proyectos",
      cv: "Descargar CV",
      linkedin: "Ver LinkedIn",
    },
    en: {
      greeting: "Hi, I'm Manuel 👋",
      title: "Frontend Developer",
      description:
        "Specialized in building scalable, intuitive, and user-centered digital experiences. I use modern technologies like React, TypeScript, and Node.js to create robust products that combine design and functionality.",
      projects: "View Projects",
      cv: "Download CV",
      linkedin: "View LinkedIn",
    },
  };

  const text = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-950 to-gray-900 text-white font-sans">
      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {text.greeting}
        </h1>
        <h2 className="text-xl sm:text-2xl text-teal-400 font-semibold">
          {text.title}
        </h2>
        <p className="text-base sm:text-lg text-gray-300">{text.description}</p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg" variant="outline" className="text-black">
            <a
              href="/Curriculum-Vitae_Manuel.pdf"
              download
              className="flex items-center gap-2"
            >
              <Download size={18} />
              {text.cv}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="border-2 border-white bg-transparent"
          >
            <a
              href="https://www.linkedin.com/in/manuel-delpino/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={18} />
              {text.linkedin}
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Flecha para ir abajo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition">
          <ChevronDown size={42} />
        </a>
      </div>
    </section>
  );
}
