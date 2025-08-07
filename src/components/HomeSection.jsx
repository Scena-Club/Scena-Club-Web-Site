import { ArrowDown, LightbulbIcon } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen
    flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Bienevenu au Scena</span>
          <br />
          <br />
          <span className="text-primary text-3xl mr-2 opacity-0 animate-fade-in-delay-1">
            Electronics
          </span>
          <br />
          <span className="text-foreground text-3xl opacity-0 animate-fade-in-delay-2">
            Networking
          </span>
          <br />
          <span className="text-primary text-3xl opacity-0 animate-fade-in-delay-3">
            Automation
          </span>
        </h1>
        <br />
        <p
          className="text-lg md:text-xl text-muted-foreground max-3-3xl mx-auto
          opacity-0 animate-fade-in-delay-4"
        >
          Ignite the spark of innovation
        </p>
        {/* Icône ampoule avec animation pulse */}
        <div className="flex flex-col items-center justify-center opacity-0 animate-fade-in-delay-4">
          <LightbulbIcon className="animate-pulse" />
        </div>
        <br />
        <div className="opacity-0 animate-fade-in-delay-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeQNzx-Wgr2sLVz7dmSVqaWVyL5uEew0dWcvgJG0vT4UL5V-w/viewform?pli=1"
            target="_blank"
            className="button"
          >
            Rejoignez-Nous
          </a>
        </div>
      </div>
      {/* Indicateur de défilement vers le bas */}
      <div
        className="absolute bottom-8 left-1/2 transfrom -translate-x-1/2
      flex flex-col items-center animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-primary mt-2 animate-pulse" />
      </div>
    </section>
  );
};
