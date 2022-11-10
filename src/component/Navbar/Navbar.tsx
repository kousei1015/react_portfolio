import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../images/github-icon.svg";
import { motion } from "framer-motion";

const Nabvar = () => {
  return (
    <motion.div
      className={styles.header}
      initial={{ y: "-40%", opacity: "0" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "1", delay: 0.2 }}
    >
      <img src={Logo} alt="" className={styles.header_img} />
      <ul className={styles.header_menu}>
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
      </ul>
    </motion.div>
  );
};

export default Nabvar;
