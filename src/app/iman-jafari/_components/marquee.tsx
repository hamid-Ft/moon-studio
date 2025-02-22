import { motion } from "framer-motion";
import { skills } from "../../../../constance";
import FlipDiv from "./flip-div";

const Marquee = () => {
  const oneThirdLength = Math.floor(skills.length / 3);

  return (
    <div className="mx-auto space-y-6">
      <div className="flex overflow-hidden x-gradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-6"
        >
          {skills.slice(0, oneThirdLength).map(({ id, skill, icon }) => (
            // <div
            //   key={`un-${i}`}
            //   className="rounded-lg bg-neutral-300/10 px-6 py-4 text-lg mr-6"
            // >
            //   Skill
            // </div>

            <FlipDiv key={id} text={skill} under={icon} className={"mr-6"} />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-6"
        >
          {skills.slice(0, oneThirdLength).map(({ id, skill, icon }) => (
            <FlipDiv key={id} text={skill} under={icon} className={"mr-6"} />
          ))}
        </motion.div>
      </div>

      <div className="flex overflow-hidden x-gradient">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-6"
        >
          {skills
            .slice(oneThirdLength, oneThirdLength * 2)
            .map(({ id, skill, icon }) => (
              <FlipDiv key={id} text={skill} under={icon} />
            ))}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-6"
        >
          {skills
            .slice(oneThirdLength, oneThirdLength * 2)
            .map(({ id, skill, icon }) => (
              <FlipDiv key={id} text={skill} under={icon} />
            ))}
        </motion.div>
      </div>

      <div className="flex overflow-hidden x-gradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-6"
        >
          {skills.slice(oneThirdLength * 2).map(({ id, skill, icon }) => (
            <FlipDiv key={id} text={skill} under={icon} className={"mr-6"} />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-6"
        >
          {skills.slice(oneThirdLength * 2).map(({ id, skill, icon }) => (
            <FlipDiv key={id} text={skill} under={icon} className={"mr-6"} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Marquee;
