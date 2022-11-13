import React from "react";
import styles from "./Navbar.module.css";
import ProfileIcon from "../../images/undraw_dog_re_k4uk.svg";
import { Link } from "react-scroll";


const Nabvar = () => {
  return (
    <div className={styles.header} id="nav">
      <img src={ProfileIcon} alt="" />
      <ul className={styles.header_menu}>
        <Link to="nav" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
        <Link to="works" spy={true} smooth={true} duration={500}>
          Works
        </Link>
        <a href="https://github.com/kousei1015/">Github</a>
      </ul>
    </div>
  );
};

export default Nabvar;
