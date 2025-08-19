import Image4 from "@/assets/Image4.JPG";
import Image5 from "@/assets/Image5.jpg";
import { ExternalLinkIcon } from "lucide-react";

const events = [
  {
    title:
      "Journée D'orientation pour Les étudiants de 1ère Année License Science et Technologie",
    description:
      "Le club Scena a participé à la journée d'orientation aux profit des étudiants de 1ère Année Licence en tronc commun Science et Technologie",
    image: Image4,
    link: "https://drive.google.com/file/d/1H0eef1Vx3tlrJgDM56BVsfUv5vF0LlHv/view?usp=drive_link",
  },
  {
    title: "Afrobot 2025 - Compétition de Robot Suiveur de ligne",
    description:
      "Le club Scena a participé à la compétition de robot suiveur de ligne d'Afrobot 2025 et a effectué un parcours honorable durant sa première participation",
    image: Image5,
    link: "https://drive.google.com/file/d/1H0eef1Vx3tlrJgDM56BVsfUv5vF0LlHv/view?usp=drive_link",
  },
];

export const Event = () => {
  return (
    <section id="events" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Évenements <span className="text-primary">Récents</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Le club Scena est un club actif qui a eux l'occasion de participer à
          plusieurs évenements permettant aux adhérents de montrer leur
          compétences et mettre leur connaissances à l'épreuve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 pb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={event.link}
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
      </div>
    </section>
  );
};
