interface ProyectsProps {
  language: "es" | "en";
}

export default function Proyects({ language }: ProyectsProps) {
  const content = {
    es: {
      title: "Proyectos",
      description: "Proyectos destacados en los que he trabajado.",
    },
    en: {
      title: "Projects",
      description: "Featured projects I have worked on.",
    },
  };
  const text = content[language];

  return (
    <section>
      <div className="min-h-screen p-6 bg-gradient-to-br from-gray-950 to-gray-900 text-white font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {text.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              {text.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
