import { Link, Github } from "lucide-react";

interface ProyectsProps {
  language: "es" | "en";
}
interface Project {
  name: string;
  description: string;
  img: string;
  link: string;
  repo: string;
}

export default function Proyects({ language }: ProyectsProps) {
  const content = {
    es: {
      title: "Proyectos",
      description: "Proyectos destacados en los que he trabajado.",
      projects: [
        {
          name: "Ultimate Tic-Tac-Toe",
          description:
            "Juego de Super Tic-Tac-Toe armado con Next.js y Django.",
          img: "https://raw.githubusercontent.com/manudelp/ultimate-tic-tac-toe/master/public/og_img.jpg",
          link: "https://utictactoe.vercel.app",
          repo: "https://github.com/manudelp/ultimate-tic-tac-toe",
        },
        {
          name: "Clear Blackjack",
          description:
            "Juego de Blackjack con una interfaz limpia y moderna. Echo completamente con HTML, CSS y JS.",
          img: "https://raw.githubusercontent.com/manudelp/blackjack/main/assets/img/og_image.png",
          link: "https://clearblackjack.netlify.app",
          repo: "https://github.com/manudelp/blackjack",
        },
      ],
    },
    en: {
      title: "Projects",
      description: "Featured projects I have worked on.",
      projects: [
        {
          name: "Ultimate Tic-Tac-Toe",
          description: "Super Tic-Tac-Toe game built with Next.js and Django.",
          img: "https://raw.githubusercontent.com/manudelp/ultimate-tic-tac-toe/master/public/og_img.jpg",
          link: "https://utictactoe.vercel.app",
          repo: "https://github.com/manudelp/ultimate-tic-tac-toe",
        },
        {
          name: "Clear Blackjack",
          description:
            "Blackjack game with a clean and modern interface. Built entirely with HTML, CSS, and JS.",
          img: "https://raw.githubusercontent.com/manudelp/blackjack/main/assets/img/og_image.png",
          link: "https://clearblackjack.netlify.app",
          repo: "https://github.com/manudelp/blackjack",
        },
      ],
    },
  };
  const text = content[language];

  return (
    <section>
      <div className="py-16 px-6 bg-gradient-to-br from-gray-800 to-gray-950 text-white font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {text.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              {text.description}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {text.projects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={project.img}
                    alt={`${project.name} Image`}
                    className="rounded-lg mb-4 w-full h-64 object-cover"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold">{project.name}</h2>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-300 transition"
                      >
                        <Link size={24} />
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-300 transition"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
