import React from 'react'
import { Container } from '../../generalStyles/GlobalStyles'
import { HeroContainer } from './Hero.Styles'
import {ArrowSm, HerohapeOne, HeroImg, HeroShapeTwo } from '../../assets'
import { Button } from '../button'
import { motion } from "framer-motion";

import {  buttonFadeInLeft, fadeInLeft, fadeInRight, fadeInUp, staggerContainer, staggerTextContainer } from '../../variants'

export const Hero = () => {
  return (
    <HeroContainer>
      <img src={HerohapeOne} alt="shape" className="hero__shape--one" />
      <img src={HeroShapeTwo} alt="shape" className="hero__shape--two" />
      <Container
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.2 }}
        whileInView="animate"
      >
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.2 }}
          whileInView="animate"
          className="hero__left"
        >
          <motion.div variants={fadeInLeft} className="hero__left--topText">
            <span>75% SAVE</span>
            For the Black Friday weekend
          </motion.div>
          <motion.h2 variants={fadeInRight} className="hero__left--header">
            Fastest & secure platform to invest in crypto
          </motion.h2>

          <motion.p variants={fadeInLeft} className="hero__left--smallText">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </motion.p>
          <Button variants={buttonFadeInLeft}>
            Try for FREE
            <img src={ArrowSm} alt="arrow-right-small" />
          </Button>
        </motion.div>

        <motion.div className="hero__right" variants={fadeInUp}>
          <motion.img
            src={HeroImg}
            alt="bitcion-illustration"
            className="hero__right--image"
          />
        </motion.div>
      </Container>
    </HeroContainer>
  );
}
