import React from 'react'
import { Container } from '../../generalStyles/GlobalStyles';
import { Button } from '../button';
import { MarketContainer } from './Market.Styles'
import { marketData } from './marketData';

export const Market = () => {
  return (
    <MarketContainer>
      <h2 className="market__title">
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>

      {marketData.map((item, id) => {
        return (
          <Container key={id} reverse={item.direction} mobileReverse>
            <div className="market__textContainer">
              <h4 className="market__textContainer--title">{item.title}</h4>
              <p className="market__textContainer--text">{item.text}</p>
              <Button>Learn More</Button>
            </div>
            <div className="market__imageContainer">
              <img
                src={item.image}
                alt={item.title}
                className={`market__imageContainer--image  ${item.className}`}
              />
            </div>
          </Container>
        );
      })}
      
    </MarketContainer>
  );
}
