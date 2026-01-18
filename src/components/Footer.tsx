import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <h3 className="font-serif text-2xl">Masterclass</h3>
          <p className="text-primary-foreground/70 text-sm max-w-md">
            Professionelles Bridal Hair & Makeup Coaching für aufstrebende Stylisten.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60 pt-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <span>für Beauty-Profis</span>
          </div>
          <p className="text-xs text-primary-foreground/40 pt-2">
            © {new Date().getFullYear()} Masterclass. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
