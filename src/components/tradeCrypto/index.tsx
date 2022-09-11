import {motion} from 'framer-motion'
import { ArrowSm, BorderArrowRight } from '../../assets';
import { fadeIn,  fadeInLeft, staggerContainer } from '../../variants';
import { Button } from '../button';
import { Currencies, TradeCryptoContainer } from './TradeCrypto.Styles'
import { tradeData } from './tradeData';


export const TradeCrypto = () => {
  return (
    <TradeCryptoContainer>
      <motion.div
        className="content"
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.2 }}
        whileInView="animate"
      >
        <motion.h4 className="title" variants={fadeIn}>
          Trade securely and market the high growth cryptocurrencies.
        </motion.h4>
        <Currencies
          variants={staggerContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.2 }}
          whileInView="animate"
        >
          {tradeData.map((item, id) => {
            return (
              <motion.div
                className="currency__box"
                key={id}
                variants={fadeInLeft}
              >
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
                    <img
                      src={BorderArrowRight}
                      alt="arrow-right"
                      className="nobg__btn--icon"
                    />
                  </Button>
                )}
              </motion.div>
            );
          })}
        </Currencies>
      </motion.div>
    </TradeCryptoContainer>
  );
}
