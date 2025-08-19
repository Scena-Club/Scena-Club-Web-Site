import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { About } from "../components/About";
import { Event } from "../components/Event";
import { Projects } from "../components/Projects";
import { Formation } from "../components/Formation";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Term from "../components/Term";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Nav Bar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HomeSection />
        <About />
        <Event />
        <Projects />
        <Formation />
        <Contact />
        <Term />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
