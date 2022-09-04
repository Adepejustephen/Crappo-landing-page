import React from "react";
import { BarIcon, EarthIcon, PersonIcon } from "../../assets";
import { Numbers, WhyCrappoContainer } from "./WhyCrappo.styles";

export const WhyCrappo = () => {
  return (
    <WhyCrappoContainer>
      <Numbers className="numbers">
        <div className="numbers__item">
          <img src={BarIcon} alt="BarChart" className="numbers__item--image" />
          <div className="numbers__item--text">
            <h4>$30B</h4>
            <span>Digital Currency Exchanged</span>
          </div>
        </div>
        <div className="numbers__item">
          <img
            src={PersonIcon}
            alt="person"
            className="numbers__item--image"
          />
          <div className="numbers__item--text">
            <h4>10M+</h4>
            <span>Trusted Wallets Investor</span>
          </div>
        </div>
        <div className="numbers__item">
          <img
            src={EarthIcon}
            alt="person"
            className="numbers__item--image"
          />
          <div className="numbers__item--text">
            <h4>10M+</h4>
            <span>Trusted Wallets Investor</span>
          </div>
        </div>
      </Numbers>
    </WhyCrappoContainer>
  );
};
