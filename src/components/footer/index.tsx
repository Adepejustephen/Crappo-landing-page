import React from 'react'
import { BitCoinImg, Facebook, Instagram, Linkedin, Logo, Mastercard, Twitter, Visa, Youtube } from '../../assets'
import { FooterBottom, FooterContainer, FooterTop } from './Footer.Styles'
import { links } from './footerLinks';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <div className="footer__logo">
          <img src={Logo} alt="crrappo-logo" />
        </div>

        <div className="footer__links">
          <div className="footer__links--container">
            <h4 className="footer__links--title">Quick Link</h4>
            <ul className="footer__list">
              {links.firstLinks.map((link, id) => (
                <li className="footer__list--item" key={id}>
                  {link.link}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__links--container">
            <h4 className="footer__links--title">Resources</h4>
            <ul className="footer__list">
              {links.secondLinks.map((link, id) => (
                <li className="footer__list--item" key={id}>
                  {link.link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__payments">
          <h5 className="footer___payments--title">
            We accept following payment systems
          </h5>
          <div className="footer__payments--images">
            <img src={Visa} alt="Visa" />
            <img src={Mastercard} alt="Mastercard" />
            <img src={BitCoinImg} alt="Bitcoin" />
          </div>
        </div>
      </FooterTop>
      <FooterBottom>
              <span className="footer__bottom--left">©2021 CRAPPO. All rights reserved</span>
              <div className="footer__bottom--right">
                  <img src={Facebook} alt="facebook" className="footer__bottom--icon" />
                  <img src={Instagram} alt="instagram" className="footer__bottom--icon" />
                  <img src={Youtube} alt="youtube" className="footer__bottom--icon" />
                  <img src={Twitter} alt="twitter" className="footer__bottom--icon" />
                  <img src={Linkedin} alt="linkedin" className="footer__bottom--icon" />
              </div>
      </FooterBottom>
    </FooterContainer>
  );
}
