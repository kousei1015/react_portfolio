import React from "react";
import styles from "./Hero.module.css";
import backImage from "../../images/bg1-1.svg";
import Nabvar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.hero_container} id="hero">
      <Nabvar />
      <div className={styles.hero}>
        
        <div className={styles.hero_left}>
          <motion.div
            className={styles.hero_text_container}
            initial={{ x: "-40%", opacity: "0" }}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: "1", delay: 0.2}}
          >
            <h1 className={styles.hero_text}>
              Hi, I'm <span>Kosei</span>
            </h1>
            <h1 className={styles.hero_text}>Welcome to My Portfolio</h1>
          </motion.div>
        </div>
        <div className={styles.hero_right}>
          <img src={backImage} alt="" className={styles.hero_img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
