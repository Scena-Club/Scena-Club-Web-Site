import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { WebLinksAddon } from "@xterm/addon-web-links";
import "@xterm/xterm/css/xterm.css";

const Term = () => {
  const terminalRef = useRef(null);
  const terminal = useRef(null);
  const fitAddon = useRef(null);
  const webLinksAddon = useRef(null);
  const commandHistory = useRef([]);
  const historyIndex = useRef(-1);

  useEffect(() => {
    if (terminal.current && terminalRef.current?.children.length > 0) {
      return;
    }

    terminal.current = new Terminal({
      cursorBlink: true,
      theme: {
        background: "#0d1117",
        foreground: "#e6edf3",
        cursor: "#85be50",
        selection: "#264f78",
        black: "#484f58",
        red: "#ff7b72",
        green: "#3fb950",
        yellow: "#d29922",
        blue: "#58a6ff",
        magenta: "#bc8cff",
        cyan: "#39c5cf",
        white: "#b1bac4",
      },
      fontSize: 14,
      fontFamily: 'JetBrains Mono, Consolas, "Courier New", monospace',
      lineHeight: 1.2,
    });

    // Initialisation des addons
    fitAddon.current = new FitAddon();
    webLinksAddon.current = new WebLinksAddon();

    terminal.current.loadAddon(fitAddon.current);
    terminal.current.loadAddon(webLinksAddon.current);
    terminal.current.open(terminalRef.current);
    fitAddon.current.fit();

    const welcomeMessages = [
      "",
      "╔═══════════════════════════════════════╗",
      "║         🚀 SCENA TERMINAL v1.0         ║",
      "╚═══════════════════════════════════════╝",
      "",
      "✨ Bienvenue dans l'interface de Scena !",
      "💡 Tapez 'help' pour voir les commandes disponibles",
      "",
    ];

    welcomeMessages.forEach((message) => {
      terminal.current.writeln(message);
    });
    terminal.current.write("scena@terminal:~$ ");

    let currentLine = "";

    // Commandes disponibles
    const commands = {
      help: () => {
        terminal.current.writeln("");
        terminal.current.writeln("🔧 Commandes disponibles:");
        terminal.current.writeln("  help      - Affiche cette aide");
        terminal.current.writeln("  clear     - Efface le terminal");
        terminal.current.writeln("  date      - Affiche la date actuelle");
        terminal.current.writeln("  team      - Équipe de Scena");
        terminal.current.writeln("  logo      - Logo de Scena");
        terminal.current.writeln("");
      },

      clear: () => {
        terminal.current.clear();
      },

      date: () => {
        const now = new Date();
        terminal.current.writeln(
          `📅 ${now.toLocaleDateString("fr-DZ", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}`,
        );
      },

      team: () => {
        terminal.current.writeln("");
        terminal.current.writeln("👥 Équipe Scena 2025:");
        terminal.current.writeln("─────────────────────────────");
        terminal.current.writeln("🛰️ Président: Youva Djaoudene");
        terminal.current.writeln("🤖 Vice-Président: Rayane Ghebrioua");
        terminal.current.writeln("📝 Secrétaire: Imene Mallek");
        terminal.current.writeln(
          "⚖️ Assesseurs: Kamelia Terki, Sofia Debbou, Massyl Taleb, Merouane Azerradj ",
        );
        terminal.current.writeln("");
        terminal.current.writeln(
          "📱 Chef du Département Contenus & Communications: Sofia Debbou",
        );
        terminal.current.writeln(
          "🔧 Chef du Département Innovations & Ingénierie: Ferhat Chelfi",
        );
        terminal.current.writeln(
          "🤝 Chef du Département Partenariats & Événementiel: Lyamine Benmeziane",
        );
        terminal.current.writeln("");
        terminal.current.writeln("🖥️ Développeur du Site Web: Wassim Bakir");
        terminal.current.writeln("");
        terminal.current.writeln("📊 Nombre d'adhérents actifs: 29");
        terminal.current.writeln("");
      },

      logo: () => {
        terminal.current.writeln("");
        terminal.current.writeln("🌐 Logo officiel de Scena:");
        terminal.current.writeln(
          "🔗 https://drive.google.com/file/d/112vF9BKO_JqnZrP8SNCVl5uBAChcZ8l9/view?usp=drive_link",
        );
        terminal.current.writeln("");
      },
    };

    const processCommand = (command) => {
      if (command.trim() === "") return;

      // Ajouter à l'historique
      commandHistory.current.push(command);
      historyIndex.current = commandHistory.current.length;

      const cmd = command.toLowerCase().trim();

      if (commands[cmd]) {
        commands[cmd]();
      } else {
        terminal.current.writeln("");
        terminal.current.writeln(`❌ Commande inconnue: '${command}'`);
        terminal.current.writeln(
          "💡 Tapez 'help' pour voir les commandes disponibles",
        );
        terminal.current.writeln("");
      }
    };

    // Gestion des événements clavier
    terminal.current.onData((data) => {
      const char = data;

      if (char === "\r") {
        // Entrée
        terminal.current.writeln("");
        processCommand(currentLine.trim());
        currentLine = "";
        terminal.current.write("scena@terminal:~$ ");
      } else if (char === "\u007F") {
        // Backspace
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1);
          terminal.current.write("\b \b");
        }
      } else if (char === "\u001b[A") {
        // Flèche haut - historique
        if (historyIndex.current > 0) {
          historyIndex.current--;
          // Effacer la ligne actuelle
          terminal.current.write("\r\x1b[K");
          terminal.current.write("scena@terminal:~$ ");
          currentLine = commandHistory.current[historyIndex.current];
          terminal.current.write(currentLine);
        }
      } else if (char === "\u001b[B") {
        // Flèche bas - historique
        if (historyIndex.current < commandHistory.current.length - 1) {
          historyIndex.current++;
          terminal.current.write("\r\x1b[K");
          terminal.current.write("scena@terminal:~$ ");
          currentLine = commandHistory.current[historyIndex.current];
          terminal.current.write(currentLine);
        } else {
          historyIndex.current = commandHistory.current.length;
          terminal.current.write("\r\x1b[K");
          terminal.current.write("scena@terminal:~$ ");
          currentLine = "";
        }
      } else if (char >= " " && char <= "~") {
        // Caractères imprimables
        currentLine += char;
        terminal.current.write(char);
      }
    });

    // Redimensionnement
    const handleResize = () => {
      fitAddon.current?.fit();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      terminal.current?.dispose();
    };
  }, []);

  return (
    <section className="h-125 w-full mb-0 pb-0 mt-11">
      <div
        ref={terminalRef}
        className="h-full w-full shadow-[0_-4px_6px_rgba(42,153,239,0.3)] text-left"
      />
    </section>
  );
};

export default Term;
