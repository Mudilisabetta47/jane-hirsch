import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/masterclass-hero.png";
interface HeroSectionProps {
  onScrollToRegistration: () => void;
}
const HeroSection = ({
  onScrollToRegistration
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cream">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose-light blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-center lg:text-left">
            <motion.span initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="inline-block text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Bridal Hair & Makeup Coaching
            </motion.span>
            
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 leading-tight">
              <span className="text-gradient-rose">Masterclass</span> ist vorbei
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Wir hoffen, es hat euch gefallen! Vielen Dank für eure Teilnahme.


            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="elegant" size="xl" onClick={onScrollToRegistration}>
                Jetzt Anmelden
              </Button>
              <Button variant="elegant-outline" size="xl" onClick={() => document.getElementById('schedule')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Programm Ansehen
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={heroImage} alt="Masterclass - Professionelle Brautfrisuren und Makeup" className="w-full h-auto object-cover" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;