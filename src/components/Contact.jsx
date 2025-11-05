import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPin,
  SendIcon,
} from "lucide-react";
import Discord from "simple-icons-react/icons/discord";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://getform.io/f/apjzmxna", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(() => {
        setTimeout(() => {
          toast({
            title: "Message envoyé",
            description: "Merci de nous avoir contacté.",
            variant: "success",
          });
          e.target.reset();
        }, 1500);
      })
      .catch(() => {
        setTimeout(() => {
          toast({
            title: "Erreur lors de l'envoi",
            description: "Une erreur s'est produite.",
            variant: "destructive",
          });
        }, 1500);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Nous <span className="text-primary">Contacter</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Pour toute question, suggestion, demande d'information ou de
          collaboration, n'hésitez pas à nous contacter. Nous sommes là pour
          vous aider.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Nos Coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MailIcon className="h-6 w-6 text-primary" />
                  {""}
                </div>
                <div>
                  <h4 className="font-medium ">
                    Email :{" "}
                    <a
                      href="mailto:scena@tech.univ-bejaia.dz"
                      className="text-muted-foreground
                    hover:text-primary transition-colors"
                    >
                      scena@tech.univ-bejaia.dz
                    </a>
                  </h4>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">
                    Lieu :{" "}
                    <a
                      href="https://www.google.com/maps/place/University+of+B%C3%A9ja%C3%AFa/@36.7513283,5.0388426,17z/data=!4m6!3m5!1s0x128d3367dd909473:0xb5a389343ac0ce10!8m2!3d36.7502671!4d5.0407496!16s%2Fm%2F0h51m2z?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Campus Targa Ouzemour, Béjaia
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Réseaux Sociaux</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://discord.gg/FCn9AtWhBZ" target="_blank">
                  <Discord className="h-7 w-7 hover:text-primary transition-colors" />
                </a>
                <a href="https://www.instagram.com/scena_club/" target="_blank">
                  <InstagramIcon className="h-7 w-7 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61575810688263"
                  target="_blank"
                >
                  <FacebookIcon className="h-7 w-7 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Envoyer un Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background
                  focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background
                  focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background
                  focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Bonjour, j'aimerais en savoir plus sur..."
                />
              </div>
              <br />
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? "Envoi..." : "Envoyer"}
                <SendIcon size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
