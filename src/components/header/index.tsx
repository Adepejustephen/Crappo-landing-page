import React, { useState } from "react";
import { Logo } from "../../assets";
import { fadeInDown } from "../../variants";
import { Button } from "../button";
import { HeaderContainer, NavBar, Togglebtn } from "./Header.styles";
import { menu } from "./menu";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <HeaderContainer variants={fadeInDown} animate='animate'initial='initial' >
      <div className="header__content">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo__image" />
        </div>
        <NavBar openNav={openNav} >
          <ul className="nav__list">
            {menu.map((item, id) => (
              <li
                key={id}
                className="nav__list--item"
                onClick={() => setOpenNav(!openNav)}
              >
                {item.link}
              </li>
            ))}
          </ul>
          <div className="btns" onClick={() => setOpenNav(!openNav)}>
            <Button noBg heaaderBtn>
              Login
            </Button>

            <div className="btns__divider"></div>

            <Button heaaderBtn>Register</Button>
          </div>
        </NavBar>
        <Togglebtn openNav={openNav} onClick={() => setOpenNav(!openNav)}>
          <div className="line line-one"></div>
          <div className="line line-two "></div>
          <div className="line line-three"></div>
        </Togglebtn>
      </div>
    </HeaderContainer>
  );
};
