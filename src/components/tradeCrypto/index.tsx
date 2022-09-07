import React from 'react'
import { ArrowSm, BorderArrowRight } from '../../assets';
import { Button } from '../button';
import { Currencies, TradeCryptoContainer } from './TradeCrypto.Styles'
import { tradeData } from './tradeData';


export const TradeCrypto = () => {
  return (
    <TradeCryptoContainer>
      <div className="content">
        <h4 className="title">
          Trade securely and market the high growth cryptocurrencies.
        </h4>
        <Currencies>
          {tradeData.map((item, id) => {
            return (
              <div className="currency__box" key={id}>
                {item.icon}
                <h4 className="currency__box--name">
                  {item.currency} <span>{item.abv}</span>
                </h4>
                <span className="currency__box--text">{item.text}</span>
                {item.btnTxt && (
                  <Button>
                    {item.btnTxt} <img src={ArrowSm} alt="arrow-right" />
                  </Button>
                )}
                {!item.btnTxt && (
                  <Button noBg>
                    <img src={BorderArrowRight} alt="arrow-right" className='nobg__btn--icon' />
                  </Button>
                )}
              </div>
            );
          })}
          
        </Currencies>
      </div>
    </TradeCryptoContainer>
  );
}
