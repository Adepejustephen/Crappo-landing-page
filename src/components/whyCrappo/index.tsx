import { motion } from "framer-motion";
import {
  BarIcon,
  EarthIcon,
  PersonIcon,
  Pie,
  UShape,
  WhyCrappoIll,
  WhyLeftShape,
} from "../../assets";
import { Container } from "../../generalStyles/GlobalStyles";
import {  buttonFadeInRight, fadeInLeft, staggerContainer, staggerTextContainer, zoomOut } from "../../variants";
import { Button } from "../button";
import { Numbers, WhyCrappoContainer, WhyCrappoMain } from "./WhyCrappo.styles";

export const WhyCrappo = () => {
  return (
    <WhyCrappoContainer>
      <img src={UShape} alt="ushape" className="U__shape" />
      <img src={Pie} alt="pieshape" className="pie__shape" />
      <img src={WhyLeftShape} alt="left-shape" className="left__shape" />
      <Numbers
        className="numbers"
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.4 }}
        whileInView="animate"
      >
        <motion.div className="numbers__item" variants={zoomOut}>
          <img src={BarIcon} alt="BarChart" className="numbers__item--image" />
          <div className="numbers__item--text">
            <h4>$30B</h4>
            <span>Digital Currency Exchanged</span>
          </div>
        </motion.div>
        <motion.div className="numbers__item" variants={zoomOut}>
          <img src={PersonIcon} alt="person" className="numbers__item--image" />
          <div className="numbers__item--text">
            <h4>10M+</h4>
            <span>Trusted Wallets Investor</span>
          </div>
        </motion.div>
        <motion.div className="numbers__item" variants={zoomOut}>
          <img src={EarthIcon} alt="person" className="numbers__item--image" />
          <div className="numbers__item--text">
            <h4>190</h4>
            <span>Trusted Wallets Investor</span>
          </div>
        </motion.div>
      </Numbers>
      <WhyCrappoMain>
        <Container
          variants={staggerContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.4 }}
          whileInView="animate"
        >
          <motion.div className="whyCrappo__left" variants={zoomOut}>
            <img
              src={WhyCrappoIll}
              alt="WhyCrappo illustration"
              className="whyCrappo__left--image"
            />
          </motion.div>

          <motion.div
            className="whyCrappo__right"
            variants={staggerTextContainer}
            initial="initial"
            viewport={{ once: false, amount: 0.4 }}
            whileInView="animate"
          >
            <motion.h4
              className="whyCrappo__right--heading"
              variants={fadeInLeft}
            >
              Why you should choose CRAPPO
            </motion.h4>
            <motion.span
              variants={fadeInLeft}
              className="whyCrappo__right--subText"
            >
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </motion.span>
            <Button variants={buttonFadeInRight}>Learn More</Button>
          </motion.div>
        </Container>
      </WhyCrappoMain>
    </WhyCrappoContainer>
  );
};
