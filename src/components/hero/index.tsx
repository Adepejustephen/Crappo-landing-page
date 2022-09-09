import React from 'react'
import { Container } from '../../generalStyles/GlobalStyles'
import { HeroContainer } from './Hero.Styles'
import {ArrowSm, HerohapeOne, HeroImg, HeroShapeTwo } from '../../assets'
import { Button } from '../button'

export const Hero = () => {
  return (
    <HeroContainer>

      <img src={HerohapeOne} alt="shape" className="hero__shape--one" />
      <img src={HeroShapeTwo} alt="shape" className="hero__shape--two" />
      <Container>
        <div className="hero__left">
          <div className="hero__left--topText">
            <span>75% SAVE</span>
            For the Black Friday weekend
          </div>
          <h2 className="hero__left--header">
            Fastest & secure platform to invest in crypto
          </h2>

          <p className="hero__left--smallText">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <Button>
            Try for FREE
            <img src={ArrowSm} alt='arrow-right-small' />
          </Button>
        </div>

        <div className="hero__right">
          <img
            src={HeroImg}
            alt="bitcion-illustration"
            className="hero__right--image"
          />
        </div>
      </Container>
    </HeroContainer>
  );
}
