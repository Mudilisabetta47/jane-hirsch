import { motion } from "framer-motion";
import { Clock, Camera, Award, Coffee } from "lucide-react";
const ScheduleSection = () => {
  const day1Schedule = [{
    time: "9:30 - 10:00 Uhr",
    title: "Ankommen & Begrüßung",
    icon: Coffee
  }, {
    time: "10:00 - 13:30 Uhr",
    title: "Modernes Brautmakeup & Brautfrisur",
    icon: Camera
  }, {
    time: "13:30 - 14:00 Uhr",
    title: "Pause",
    icon: Coffee
  }, {
    time: "14:00 - 17:00 Uhr",
    title: "Weitere trendige Brautfrisuren",
    icon: Camera
  }, {
    time: "17:00 - 17:30 Uhr",
    title: "Q&A, Verabschiedung & Zertifikatvergabe",
    description: "Für diejenigen die nur den Demo Tag buchen",
    icon: Award
  }];
  const day2Schedule = [{
    time: "10:00 - 10:30 Uhr",
    title: "Lookbesprechung mit Model & Coach",
    icon: Coffee
  }, {
    time: "10:30 - 15:30 Uhr",
    title: "Eigene Kreation von Hair & Makeup Look am Model",
    description: "Du kannst wählen zwischen Makeup, Hairstyling oder beides. Wunderschöne Brautkleider, Haarschmuck und Accessoires stehen zur Verfügung. Snacks werden bereitgestellt.",
    icon: Camera
  }, {
    time: "15:30 - 16:30 Uhr",
    title: "Professionelle Fotos",
    icon: Camera
  }, {
    time: "16:30 - 17:00 Uhr",
    title: "Zertifikatvergabe & Verabschiedung",
    icon: Award
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
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
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 block">08.02.26 - 09.02-26</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Dein <span className="text-gradient-rose">Masterclass</span> Ablauf
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Zwei intensive Tage voller Inspiration, praktischem Lernen und professionellen Ergebnissen für dein Portfolio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-rose/10 flex items-center justify-center">
                <span className="font-serif text-2xl text-rose">1</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground">Tag 1</h3>
                <p className="text-muted-foreground text-sm">Demo Tag</p>
              </div>
            </div>

            <div className="space-y-6">
              {day1Schedule.map((item, index) => <motion.div key={index} variants={itemVariants} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-rose/10 transition-colors">
                    <item.icon className="w-5 h-5 text-rose" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-sm text-rose font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </div>
                    <h4 className="font-medium text-foreground mt-1">{item.title}</h4>
                    {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-serif text-2xl text-gold">2</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground">Tag 2</h3>
                <p className="text-muted-foreground text-sm">Hands-On Tag</p>
              </div>
            </div>

            <div className="space-y-6">
              {day2Schedule.map((item, index) => <motion.div key={index} variants={itemVariants} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-sm text-gold font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </div>
                    <h4 className="font-medium text-foreground mt-1">{item.title}</h4>
                    {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ScheduleSection;