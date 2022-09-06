import React from "react";
import { BarIcon, EarthIcon, PersonIcon, WhyCrappoIll } from "../../assets";
import { Container } from "../../generalStyles/GrlobalStyles";
import { Button } from "../button";
import { Numbers, WhyCrappoContainer, WhyCrappoMain } from "./WhyCrappo.styles";

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
          <img src={PersonIcon} alt="person" className="numbers__item--image" />
          <div className="numbers__item--text">
            <h4>10M+</h4>
            <span>Trusted Wallets Investor</span>
          </div>
        </div>
        <div className="numbers__item">
          <img src={EarthIcon} alt="person" className="numbers__item--image" />
          <div className="numbers__item--text">
            <h4>190</h4>
            <span>Trusted Wallets Investor</span>
          </div>
        </div>
      </Numbers>
      <WhyCrappoMain>
        <Container>
          <div className="whyCrappo__left">
            <img
              src={WhyCrappoIll}
              alt="WhyCrappo illustration"
              className="whyCrappo__left--image"
            />
          </div>

          <div className="whyCrappo__right">
            <h4 className="whyCrappo__right--heading">
              Why you should choose CRAPPO
            </h4>
            <span className="whyCrappo__right--subText">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </span>
            <Button>
              Learn More
            </Button>
          </div>
        </Container>
      </WhyCrappoMain>
    </WhyCrappoContainer>
  );
};
