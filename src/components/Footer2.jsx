import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-12 px-4 bg-card relative border-t border-border mt-0 pt-8 flex
      flex-wrap justify-between items-center "
    >
      {/* Copyright dynamique avec année actuelle */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Scena Club.
      </p>
      <div className="animate-bounce">
        {/* Lien vers le haut de la page */}
        <a href="#homer">
          <ArrowUp
            className="rounded-full text-primary bg-primary/10
          hover:bg-primary/20 mt-2 animate-pulse"
            size={20}
          />
        </a>
      </div>
    </footer>
  );
};
