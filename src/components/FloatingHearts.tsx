import { motion } from "framer-motion";

const hearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4,
  size: 14 + Math.random() * 20,
  opacity: 0.15 + Math.random() * 0.3,
}));

const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {hearts.map((h) => (
      <motion.div
        key={h.id}
        className="absolute text-primary"
        style={{ left: `${h.x}%`, fontSize: h.size, opacity: h.opacity }}
        initial={{ y: "110vh", rotate: 0 }}
        animate={{ y: "-10vh", rotate: [0, 15, -15, 0] }}
        transition={{
          duration: h.duration,
          delay: h.delay,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ♥
      </motion.div>
    ))}
  </div>
);

export default FloatingHearts;
