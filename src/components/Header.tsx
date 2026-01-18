import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onScrollToRegistration: () => void;
}

const Header = ({ onScrollToRegistration }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-serif text-2xl text-foreground">
            Masterclass
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Programm
            </button>
            <button
              onClick={() => scrollToSection("registration")}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Anmeldung
            </button>
            <Button
              variant="elegant"
              size="default"
              onClick={onScrollToRegistration}
            >
              Jetzt Anmelden
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Programm
            </button>
            <button
              onClick={() => scrollToSection("registration")}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Anmeldung
            </button>
            <Button
              variant="elegant"
              size="default"
              onClick={() => {
                onScrollToRegistration();
                setIsMobileMenuOpen(false);
              }}
              className="w-full"
            >
              Jetzt Anmelden
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
