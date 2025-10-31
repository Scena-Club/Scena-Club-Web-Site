import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const navItems = [
  { name: "À Propos de Nous", href: "/" },
  { name: "Évenements", href: "/" },
  { name: "Projets", href: "/" },
  { name: "Formations", href: "/" },
  { name: "Contacts", href: "/" },
  { name: "Bibliothèque", href: "#lib" },
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-95/100 z-40 transition-all duration-100",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex item-center">
          <img
            src={Logo}
            alt="Logo"
            className="relative z-10"
            width={45}
            height={45}
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className="text-foreground/75
              hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                className="text-foreground/75 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
