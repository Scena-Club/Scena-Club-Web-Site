import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar2";
import { Lib } from "../components/Lib";
import { Footer } from "../components/Footer";

export const Library = () => {
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
        <Lib />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
