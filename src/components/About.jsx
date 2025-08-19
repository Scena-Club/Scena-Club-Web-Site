import {
  CodeIcon,
  PresentationIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-auto max-w-5xl">
        <h2>
          <span className="text-4xl md:text-5xl font-bold tracking-tight">
            À propos du <span className="text-primary">Scena</span>
          </span>
        </h2>
        <br />
        <br />

        {/* Grille responsive : 1 colonne sur mobile, 2 colonnes sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Qui sommes-nous ?</h3>
            <p className="text-muted-foreground">
              Scena (Scientific Club of Electronics, Networking and Automation)
              est un club étudiant dédié à la promotion de l'électronique, des
              télécommunications et de l'automatique. Notre objectif est de
              rassembler des passionnés pour partager des connaissances,
              développer des projets innovants et créer un environnement
              d'apprentissage collaboratif.
            </p>
            <p className="text-muted-foreground">
              Nous organisons des ateliers, des conférences et des projets
              pratiques pour aider nos membres à acquérir des compétences
              techniques et à se préparer pour une carrière dans ces domaines
              passionnants.
            </p>
            <p className="text-muted-foreground">
              Si vous êtes intéressé(e), Vous pouvez Nous rejoindre ou
              collaborer avec nous!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="button">
                Contactez-Nous
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeQNzx-Wgr2sLVz7dmSVqaWVyL5uEew0dWcvgJG0vT4UL5V-w/viewform?pli=1"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary
                hover:bg-primary/10 transition-colors duration-300"
              >
                Rejoignez-Nous
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Carte 1 : Compétitions */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CodeIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Compétitions</h4>
                  <p className="text-muted-foreground">
                    Participez à des compétitions pour tester vos compétences.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 2 : Projets pratiques */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <WrenchIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projets pratiques</h4>
                  <p className="text-muted-foreground">
                    Rejoignez une communauté de passionnés pour partager vos
                    idées et collaborer sur des projets.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 3 : Formations*/}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PresentationIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Formations</h4>
                  <p className="text-muted-foreground">
                    Assistez à des formations afin d'approfondir vos
                    connaissances.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 4 : Conferences */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Conférences</h4>
                  <p className="text-muted-foreground">
                    Participez et assistez à des conférences pour rencontrer des
                    professionnels et partager vos connaissances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
