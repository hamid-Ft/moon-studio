import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

const DURATION = 0.25;
const STAGGER = 0.025;

type Porps = {
  text: string;
  className?: string;
  under: IconType | string | undefined;
};

const FlipDiv = ({ text, under }: Porps) => {
  return (
    <div className="w-fit min-w-16 rounded-lg border text-sm  hover:text-white">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap px-6 py-4 text-xs font-black uppercase tracking-tighter"
        style={{ lineHeight: 0.85 }}
      >
        <div>
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: "-10%" },
              hovered: { y: "-500%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER,
            }}
          >
            {text}
          </motion.span>
          {/* {text} */}
        </div>

        <div className="absolute inset-0">
          <motion.span
            className="flex items-center justify-center text-3xl"
            variants={{
              initial: { y: "500%" },
              hovered: { y: "20%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER,
            }}
          >
            {under ? under : <span className="text-base pt-1">{text}</span>}

            {/* {under} */}
          </motion.span>
          {/* {under} */}
        </div>
      </motion.div>
    </div>
  );
};
export default FlipDiv;
