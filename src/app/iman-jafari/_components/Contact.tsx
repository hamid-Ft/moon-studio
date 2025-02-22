import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

import Dock from "./Dock/Dock";
import { motion } from "framer-motion";

const Contacts = [
  {
    id: 1,
    link: "/",
    icon: <AiFillHome className="text-2xl" />,
    label: "Home",
  },
  {
    id: 2,
    link: "mailto:imancx.cx@gmail.com",
    icon: <MdOutlineEmail className="text-2xl" />,
    label: "Email",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/iman-jafari-cx",
    icon: <FaLinkedinIn className="text-2xl" />,
    label: "Linkedin",
  },
  {
    id: 4,

    link: "https://github.com/kaRIOz",
    icon: <FaGithub className="text-2xl" />,
    label: "Github",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Dock
        items={Contacts}
        panelHeight={60}
        baseItemSize={40}
        magnification={70}
        distance={100}
      />
    </motion.div>
  );
};

export default Contact;
