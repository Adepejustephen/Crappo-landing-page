import React, { useState } from "react";
import { Logo } from "../../assets";
import { Button } from "../button";
import { HeaderContainer, NavBar } from "./Header.styles";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <HeaderContainer>
      <div className="header__content">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo__image" />
        </div>
        <NavBar openNav={openNav}>
          <ul className="nav__list">
            <li className="nav__list--item">Products</li>
            <li className="nav__list--item">Features</li>
            <li className="nav__list--item">About</li>
            <li className="nav__list--item">Contact</li>
          </ul>
          <div className="btns">
            <Button noBg heaaderBtn>
              Login
            </Button>

            <div className="btns__divider"></div>

            <Button heaaderBtn>Register</Button>
          </div>
        </NavBar>
      </div>
    </HeaderContainer>
  );
};
