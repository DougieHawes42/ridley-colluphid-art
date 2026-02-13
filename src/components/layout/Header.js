import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./style.scss";

import logoLightMode from "../../display/media/images/logoLightmode.png";
import logoDarkMode from "../../display/media/images/logoDarkmode.png";

import { Link1 } from "../utils/links";

const Header = ({ darkmode }) => {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className={`header ${darkmode ? "header-darkmode" : "header-lightmode"}`}
      initial={{ x: -210 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <div className="header-title-container">
        <Link to="/">
          {darkmode ? (
            <img className="header-title" src={logoDarkMode} alt="" />
          ) : (
            <img className="header-title" src={logoLightMode} alt="" />
          )}
        </Link>
      </div>
      <div className="header-links-desktop">
        <Link1 darkmode={darkmode} to="/work" text="work" />
        <Link1 darkmode={darkmode} to="/about" text="about" />
        <Link1 darkmode={darkmode} to="/blog" text="blog" />
      </div>
      {/* {menuOpen && (
        <>
          <div
            className="header-links-mobile-outer"
            onClick={() => setMenuOpen(false)}
          ></div>
          <motion.div
            className={`header-links-mobile ${darkmode ? "header-links-mobile-darkmode" : "header-links-mobile-lightmode"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link1 darkmode={darkmode} to="/work" text="work" />
            <Link1 darkmode={darkmode} to="/about" text="about" />
            <Link1 darkmode={darkmode} to="/blog" text="blog" />
            <Link1 darkmode={darkmode} to="/signup" text="sign-up" />
          </motion.div>
        </>
      )}
      {menuOpen ? (
        <IoMdClose
          className="header-links-mobile-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      ) : (
        <IoIosMenu
          className="header-links-mobile-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )} */}
    </motion.header>
  );
};

export default Header;
