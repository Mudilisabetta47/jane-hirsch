import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Check, Sparkles } from "lucide-react";

const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    day1: false,
    day2: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.day1 && !formData.day2) {
      toast({
        title: "Bitte wähle mindestens einen Tag",
        description: "Du musst mindestens Tag 1 oder Tag 2 auswählen.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Anmeldung erfolgreich! ✨",
      description: "Wir haben deine Anfrage erhalten und melden uns in Kürze bei dir.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      day1: false,
      day2: false,
    });
    
    setIsSubmitting(false);
  };

  const features = [
    "Professionelle Techniken von Experten",
    "Hochwertige Materialien inklusive",
    "Portfolio-Fotos zum Mitnehmen",
    "Zertifikat nach Abschluss",
    "Kleine Gruppengrößen",
    "Networking mit Gleichgesinnten",
  ];

  return (
    <section id="registration" className="py-24 bg-gradient-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-rose-light blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gold-light blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Sichere deinen Platz
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Jetzt <span className="text-gradient-rose">Anmelden</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Starte deine Reise zu professionellen Braut-Looks. Die Plätze sind begrenzt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-2xl text-foreground">Was dich erwartet</h3>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-rose" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-rose/5 border border-rose/20 rounded-2xl p-6">
              <p className="text-center text-muted-foreground font-light italic">
                "Investiere in deine Fähigkeiten und erschaffe unvergessliche Braut-Momente."
              </p>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
                Anmeldeformular
              </h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">Vorname</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="bg-background border-border focus:border-rose focus:ring-rose"
                      placeholder="Dein Vorname"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Nachname</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="bg-background border-border focus:border-rose focus:ring-rose"
                      placeholder="Dein Nachname"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-Mail Adresse</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-rose focus:ring-rose"
                    placeholder="deine@email.de"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Telefonnummer</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border focus:border-rose focus:ring-rose"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <Label className="text-foreground font-medium">Wähle deine Tage</Label>
                  
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <Checkbox
                      id="day1"
                      checked={formData.day1}
                      onCheckedChange={(checked) => setFormData({ ...formData, day1: checked as boolean })}
                      className="border-rose data-[state=checked]:bg-rose data-[state=checked]:border-rose"
                    />
                    <div className="flex-1">
                      <Label htmlFor="day1" className="cursor-pointer font-medium text-foreground">
                        Tag 1 - Demo Tag
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Lerne professionelle Techniken durch Demonstration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <Checkbox
                      id="day2"
                      checked={formData.day2}
                      onCheckedChange={(checked) => setFormData({ ...formData, day2: checked as boolean })}
                      className="border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                    />
                    <div className="flex-1">
                      <Label htmlFor="day2" className="cursor-pointer font-medium text-foreground">
                        Tag 2 - Hands-On Tag
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Eigene Kreation mit professionellen Fotos
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="elegant"
                  size="xl"
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Verbindlich Anmelden"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
