import React from "react";
import styles from "./Hero.module.css";
import backImage from "../../images/bg1-1.svg";
import Nabvar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <Nabvar />
      <div className={styles.hero}>
        <div className={styles.hero_blur_1}></div>
        <div className={styles.hero_blur_2}></div>
        <div className={styles.hero_blur_3}></div>
        <div className={styles.hero_left}>
          <div className={styles.hero_text_container}>
            <h1 className={styles.hero_text}>
              Hi, I'm <span>Kosei</span>
            </h1>
            <h1 className={styles.hero_text}>Welcome to My Portfolio</h1>
          </div>
        </div>
        <div className={styles.hero_right}>
          <img src={backImage} alt="" className={styles.hero_img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
