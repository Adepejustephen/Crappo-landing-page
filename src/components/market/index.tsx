import { motion } from "framer-motion";
import { CircleBottom, CircleTop } from "../../assets";
import { Container } from '../../generalStyles/GlobalStyles';
import { fadeInLeft, fadeInRight, staggerContainer, staggerTextContainer, zoomOut } from "../../variants";
import { Button } from '../button';
import { MarketContainer } from './Market.Styles'
import { marketData } from './marketData';

export const Market = () => {
  return (
    <MarketContainer>
      <img src={CircleTop} alt="cubic" className="market__topShape" />
      <img src={CircleBottom} alt="cubic" className="market__bottomShape" />
      <motion.h2
        className="market__title"
        variants={zoomOut}
        initial="initial"
        viewport={{ once: false, amount: 0.1 }}
        whileInView="animate"
      >
        Market sentiments, portfolio, and run the infrastructure of your choice
      </motion.h2>

      {marketData.map((item, id) => {
        return (
          <Container
            key={id}
            reverse={item.direction}
            mobileReverse
            variants={staggerContainer}
            initial="initial"
            viewport={{ once: false, amount: 0.4 }}
            whileInView="animate"
          >
            <motion.div
              className="market__textContainer"
              variants={staggerTextContainer}
              initial="initial"
              viewport={{ once: false, amount: 0.4 }}
              whileInView="animate"
            >
              <motion.h4
                className="market__textContainer--title"
                variants={item.direction ? fadeInLeft : fadeInRight}
              >
                {item.title}
              </motion.h4>
              <motion.p
                variants={item.direction ? fadeInLeft : fadeInRight}
                className="market__textContainer--text"
              >
                {item.text}
              </motion.p>
              <Button variants={item.direction ? fadeInLeft : fadeInRight}>
                Learn More
              </Button>
            </motion.div>
            <motion.div
              className="market__imageContainer"
              variants={item.direction ? fadeInRight : fadeInLeft}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`market__imageContainer--image  ${item.className}`}
              />
            </motion.div>
          </Container>
        );
      })}
    </MarketContainer>
  );
}
