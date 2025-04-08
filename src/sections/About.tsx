import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Mail,
  Phone,
  Globe,
  Languages,
  Users,
  FireExtinguisher,
  Blocks,
  Handshake,
  Lightbulb,
} from "lucide-react";

interface AboutProps {
  language: "es" | "en";
}

export default function About({ language }: AboutProps) {
  const content = {
    es: {
      title: "Sobre mí",
      description: [
        `¡Hola! Mi nombre es Manuel, soy estudiante de Ingeniería en Informática con experiencia en el desarrollo Frontend.
        Desde que empecé mi carrera, dediqué mi tiempo a desarrollar habilidades que me permitan destacar en este campo.
        Tomé diversos cursos enfocados en la creación de interfaces atractivas y funcionales, combinando creatividad y eficiencia.
        En mi portafolio vas a encontrar el resultado de esa pasión por el desarrollo web.`,
      ],
      skills: [
        {
          icon: <Users size={64} />,
          label: "Trabajo en equipo",
        },
        {
          icon: <FireExtinguisher size={64} />,
          label: "Resolución de problemas",
        },
        {
          icon: <Blocks size={64} />,
          label: "Adaptabilidad",
        },
        {
          icon: <Handshake size={64} />,
          label: "Comunicación efectiva",
        },
        {
          icon: <Lightbulb size={64} />,
          label: "Creatividad",
        },
      ],
      details: {
        title: "Información de contacto",
        fullName: "Manuel Oscar Delpino",
        location: "Pilar, Buenos Aires, Argentina",
        email: "manueloscardelpino@gmail.com",
        phone: "+54 9 11 2498-4397",
        website: "este mismo ;)",
        languages: {
          es: "Español (nativo)",
          en: "Inglés (Avanzado)",
          fr: "Francés (Intermedio)",
        },
      },
    },
    en: {
      title: "About Me",
      description: [
        `Hi! I'm Manuel, a Computer Engineering student with experience in Frontend development.
        Since the beginning of my career, I've dedicated my time to developing skills that allow me to stand out in this field.
        I've taken several courses focused on building attractive and functional interfaces, combining creativity and efficiency.
        In my portfolio, you'll find the result of that passion for web development.`,
      ],
      skills: [
        {
          icon: <Users size={64} />,
          label: "Teamwork",
        },
        {
          icon: <FireExtinguisher size={64} />,
          label: "Problem Solving",
        },
        {
          icon: <Blocks size={64} />,
          label: "Adaptability",
        },
        {
          icon: <Handshake size={64} />,
          label: "Effective Communication",
        },
        {
          icon: <Lightbulb size={64} />,
          label: "Creativity",
        },
      ],
      details: {
        title: "Contact Information",
        fullName: "Manuel Oscar Delpino",
        location: "Pilar, Buenos Aires, Argentina",
        email: "manueloscardelpino@gmail.com",
        phone: "+54 9 11 2498-4397",
        website: "this one ;)",
        languages: {
          es: "Spanish (native)",
          en: "English (Advanced)",
          fr: "French (Intermediate)",
        },
      },
    },
  };
  const text = content[language] as (typeof content)["es"];

  return (
    <section
      id="about"
      className="w-full px-6 py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Card de detalles */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">{text.details.title}</h3>
          <Detail
            icon={<User className="w-5 h-5" />}
            label={language === "es" ? "Nombre" : "Full Name"}
            value={text.details.fullName}
          />
          <Detail
            icon={<MapPin className="w-5 h-5" />}
            label={language === "es" ? "Ubicación" : "Location"}
            value={text.details.location}
          />
          <Detail
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            value={text.details.email}
          />
          <Detail
            icon={<Phone className="w-5 h-5" />}
            label={language === "es" ? "Teléfono" : "Phone"}
            value={text.details.phone}
          />
          <Detail
            icon={<Globe className="w-5 h-5" />}
            label="Website"
            value={text.details.website}
          />
          <div className="flex items-start gap-4">
            <div className="text-teal-600 dark:text-teal-400">
              <Languages className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {language === "es" ? "Idiomas" : "Languages"}
            </span>
          </div>
          <ul className="list-disc list-inside text-base">
            {Object.entries(text.details.languages).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </motion.div>

        {/* Texto principal */}
        <div className="sticky top-20 flex flex-col justify-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">{text.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {text.description}
            </p>
          </div>

          {/* Habilidades de personalidad */}
          <div className="flex justify-between gap-8 mt-12">
            {text.skills.map(
              (skill: { icon: React.ReactNode; label: string }) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-4 mb-4 max-w-32"
                >
                  <div className="text-teal-600 dark:text-teal-400">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-center">{skill.label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

interface DetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function Detail({ icon, label, value }: DetailProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-teal-600 dark:text-teal-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {label}
        </span>
        <span className="text-base">{value}</span>
      </div>
    </div>
  );
}
