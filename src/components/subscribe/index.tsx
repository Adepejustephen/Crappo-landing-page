import { motion } from "framer-motion";
import React from "react";
import { BitCoinBg, Cubic } from "../../assets";
import { Container } from "../../generalStyles/GlobalStyles";
import { subscribeFadeInRight } from "../../variants";
import { Button } from "../button";
import { SubscriptionContainer } from "./Subscribe.Styles";

export const Subscription = () => {
  return (
    <SubscriptionContainer>
      <Container>
        <motion.div
          className="SubscribeBox"
          variants={subscribeFadeInRight}
          initial="initial"
          viewport={{ once: false, amount: 0.6 }}
          whileInView="animate"
        >
          <img src={Cubic} alt="cubic-shape" className="subscribe__cubic" />
          <img src={BitCoinBg} alt="" className="subscribe__bitcoin" />
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
        </motion.div>
      </Container>
    </SubscriptionContainer>
  );
};
