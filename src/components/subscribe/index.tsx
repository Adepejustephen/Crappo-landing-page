import React from "react";
import { Container } from "../../generalStyles/GrlobalStyles";
import { Button } from "../button";
import { SubscriptionContainer } from "./Subscribe.Styles";

export const Subscription = () => {
  return (
    <SubscriptionContainer>
      <Container>
        <div className="SubscribeBox">
          <div className="subscribeBox__left">
            <h4 className="subscribeBox__left--title">Start mining now</h4>
            <span className="subscribeBox__left--text">
              Join now with CRAPPO to get the latest news and start mining now
            </span>
          </div>
          <form action="" className="subscribeBox__form">
            <input
              type="text"
              className="subscribeBox__form--input"
              defaultValue="Enter your email"
            />
            <Button whiteBg>Subscribe</Button>
          </form>
        </div>
      </Container>
    </SubscriptionContainer>
  );
};
