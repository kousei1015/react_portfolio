import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import Logo from "../../images/github-icon.svg";

const Nabvar = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="" className={styles.header_img} />
      <ul className={styles.header_menu}>
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
      </ul>
    </div>
  );
};

export default Nabvar;
