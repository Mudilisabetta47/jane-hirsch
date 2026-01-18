import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Check, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
const RegistrationSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Bitte fülle alle Pflichtfelder aus",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke("send-registration", {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone
        }
      });
      if (error) throw error;
      toast({
        title: "Anmeldung erfolgreich! ✨",
        description: "Wir haben deine Anfrage erhalten und melden uns in Kürze bei dir."
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "Fehler bei der Anmeldung",
        description: "Bitte versuche es später erneut oder kontaktiere uns direkt.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const features = ["Professionelle Techniken von Experten", "Hochwertige Materialien inklusive", "Portfolio-Fotos zum Mitnehmen", "Zertifikat nach Abschluss", "Kleine Gruppengrößen", "Networking mit Gleichgesinnten"];
  return <section id="registration" className="py-24 bg-gradient-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-rose-light blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gold-light blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Sichere deinen Platz
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Jetzt <span className="text-gradient-rose">Anmelden</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            08.02 Theorie 449,00 € - 08.02 - 09.02 Theorie & Praxis 999,00€                           
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Features */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-2xl text-foreground">Was dich erwartet</h3>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-rose" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>)}
              </div>
            </div>

            <div className="bg-rose/5 border border-rose/20 rounded-2xl p-6">
              <p className="text-center text-muted-foreground font-light italic">
                "Investiere in deine Fähigkeiten und erschaffe unvergessliche Braut-Momente."
              </p>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
                Anmeldeformular
              </h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">Vorname *</Label>
                    <Input id="firstName" value={formData.firstName} onChange={e => setFormData({
                    ...formData,
                    firstName: e.target.value
                  })} required className="bg-background border-border focus:border-rose focus:ring-rose" placeholder="Dein Vorname" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Nachname *</Label>
                    <Input id="lastName" value={formData.lastName} onChange={e => setFormData({
                    ...formData,
                    lastName: e.target.value
                  })} required className="bg-background border-border focus:border-rose focus:ring-rose" placeholder="Dein Nachname" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-Mail Adresse *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="bg-background border-border focus:border-rose focus:ring-rose" placeholder="deine@email.de" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Telefonnummer</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} className="bg-background border-border focus:border-rose focus:ring-rose" placeholder="+49 123 456789" />
                </div>

                <Button type="submit" variant="elegant" size="xl" className="w-full mt-6" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Verbindlich Anmelden"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default RegistrationSection;