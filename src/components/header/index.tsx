import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "../../assets";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  headerButton,
  staggerContainer,
  staggerTextContainer,
  rotateLine,
} from "../../variants";
import { Button } from "../button";
import { HeaderContainer, NavBar, Togglebtn } from "./Header.styles";
import { menu } from "./menu";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <HeaderContainer variants={fadeInDown} animate="animate" initial="initial">
      <motion.div
        className="header__content"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="logo" variants={fadeInLeft}>
          <img src={Logo} alt="logo" className="logo__image" />
        </motion.div>
        <NavBar
          openNav={openNav}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.ul
            className="nav__list"
            variants={staggerTextContainer}
            initial="initial"
            animate="animate"
          >
            {menu.map((item, id) => (
              <motion.li
                key={id}
                className="nav__list--item"
                onClick={() => setOpenNav(!openNav)}
                variants={fadeInRight}
              >
                {item.link}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="btns"
            onClick={() => setOpenNav(!openNav)}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Button noBg heaaderBtn variants={headerButton}>
              Login
            </Button>

            <motion.div
              className="btns__divider"
              variants={rotateLine}
            ></motion.div>

            <Button heaaderBtn variants={headerButton}>
              Register
            </Button>
          </motion.div>
        </NavBar>
        <Togglebtn openNav={openNav} onClick={() => setOpenNav(!openNav)}>
          <div className="line line-one"></div>
          <div className="line line-two "></div>
          <div className="line line-three"></div>
        </Togglebtn>
      </motion.div>
    </HeaderContainer>
  );
};
