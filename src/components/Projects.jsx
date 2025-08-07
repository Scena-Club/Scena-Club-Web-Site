import { ArrowRight, ExternalLinkIcon, Github, GithubIcon } from "lucide-react";
import Image1 from "@/assets/Image1.jpg";
import Image2 from "@/assets/Image2.jpg";
import Image3 from "@/assets/Image3.png";
const projects = [
  {
    id: 1,
    title: "Automatisation Agricole",
    description: "Un système d'automatisation pour la gestion des cultures.",
    image: [Image1],
    tags: ["IoT", "Cultures", "Innovation"],
    link: "https://drive.google.com/file/d/1H0eef1Vx3tlrJgDM56BVsfUv5vF0LlHv/view?usp=drive_link",
  },
  {
    title: "Drones Anti-Incendie",
    description:
      "Un projet de drones pour la détection et la lutte contre les incendies.",
    image: [Image2],
    tags: ["Drones", "Sécurité", "Incendie"],
    link: "https://drive.google.com/file/d/1vJloYB1GBKE1NVCh_3Th96hMwt2ntx_U/view?usp=drive_link",
  },
  {
    title: "Scoring Taekwondo",
    description:
      "Un système de scoring automatisé pour les compétitions de taekwondo.",
    image: [Image3],
    tags: ["Sport", "Taekwondo", "Scoring"],
    link: "https://drive.google.com/file/d/1hDppk2jW5JxK7No03ER4wrRBh9wnljtg/view?usp=drive_link",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Nos <span className="text-primary">Future Projets </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez nos projets en cours et à venir, qui visent à promouvoir
          l'innovation et la technologie dans divers domaines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                transition-transform duration-500 group-hover:scale-115"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="text-secondary-foreground bg-primary/20 font-medium px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div>
          <a
            className="button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Scena-Club"
          >
            GitHub
            <ArrowRight size={16} />
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
