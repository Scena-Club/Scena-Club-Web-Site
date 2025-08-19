import Ard from "@/assets/Arduino.jpg";
import { ExternalLinkIcon } from "lucide-react";

export const Formation = () => {
  return (
    <section id="formation" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Formations <span className="text-primary">Organisées</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Notre club organise des formations afin de permettre aux adhérents de
          développer leurs compétences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={Ard}
              alt="Arduino and Robotics"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          <div className="p-6 group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <h3 className="text-xl font-semibold mb-1">
              Formation en Arduino et Robotique
            </h3>
            <br />
            <p className="text-muted-foreground text-lg">
              Nous avons organisé en collaboration avec le club Alpha de
              l'université de Constantine 3, une Formation en ligne afin
              d'initier les adhérents à l'arduino, la robotique et à
              l'automatique.
            </p>
            <br />
            <p className="text-muted-foreground text-lg">
              Présentée par Mr Lyamine Benmeziane, étudiant en automatique et
              informatique industriel à l'université de Bejaia et membre du club
              Scena, cette formation a été un succès et a permis aux adhérents
              de développer leurs compétences en arduino et robotique.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/p/DMpe9qZtCiL/?img_index=1"
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ExternalLinkIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
