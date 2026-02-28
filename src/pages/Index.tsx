import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkle from "@/components/Sparkle";
import { Heart, Cake, Star, PartyPopper } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />
      <Sparkle />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Top decoration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <Cake className="w-12 h-12 text-primary" />
          </div>
        </motion.div>

        {/* Age badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase">
            <PartyPopper className="w-4 h-4" />
            March 6th
            <PartyPopper className="w-4 h-4" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-script text-6xl md:text-8xl text-primary text-center leading-tight mb-2"
        >
          Happy 20th
        </motion.h1>

        <motion.p
          custom={1.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-script text-4xl md:text-5xl text-gold text-center mb-8"
        >
          Birthday!
        </motion.p>

        {/* Decorative hearts row */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-10"
        >
          <Star className="w-4 h-4 text-gold" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <div className="w-16 h-px bg-border" />
          <Heart className="w-6 h-6 text-rose-glow fill-rose-glow" />
          <div className="w-16 h-px bg-border" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <Star className="w-4 h-4 text-gold" />
        </motion.div>

        {/* Message card */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-lg w-full"
        >
          <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-xl backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed text-card-foreground text-center mb-6">
              To someone who makes every moment brighter just by being in it — 
              <span className="text-primary font-semibold"> you</span> deserve 
              all the love, laughter, and happiness this world has to offer.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center mb-6">
              Twenty looks absolutely amazing on you. Here's to more adventures, 
              more smiles, and more of that charm that makes everyone around you smile. 💛
            </p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent" />
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <div className="h-px w-12 bg-accent" />
            </div>

            <p className="font-script text-2xl md:text-3xl text-primary text-center">
              Wishing you nothing but the best,
            </p>
            <p className="font-script text-xl md:text-2xl text-gold text-center mt-1">
              today and always ✨
            </p>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex items-center gap-4"
        >
          {["🎂", "🎁", "🥳", "💐", "🎈"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl md:text-3xl"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-sm text-muted-foreground tracking-widest uppercase"
        >
          Made with{" "}
          <Heart className="inline w-3.5 h-3.5 text-primary fill-primary mx-1" />
          just for you
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
