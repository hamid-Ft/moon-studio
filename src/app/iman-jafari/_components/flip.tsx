import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const Flip = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap uppercase tracking-tighter text-6xl md:text-9xl "
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {children &&
          children.split("").map((l: string, i: number) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {l}
            </motion.span>
          ))}
      </div>

      <div className="absolute inset-0">
        {children &&
          children.split("").map((l: string, i: number) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {l}
            </motion.span>
          ))}
      </div>
    </motion.div>
  );
};
export default Flip;
