
import { Button } from '../button';
import { EarningContents, EarningTextContainer, EearningContainer, RateCalculatorContainer } from './Earning.Styles'

export const CheckEarnings = () => {
  return (
    <EearningContainer>
      <EarningContents>
        <EarningTextContainer>
          <h4>Check how much you can earn</h4>
          <p>
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </EarningTextContainer>

        <RateCalculatorContainer>
          <form action="" className="form">
            <input
              type="text"
              className="form__input"
              defaultValue="Enter your hash rate"
              //   placeholder="Enter your hash rate"
            />
            <select name="" id="" className="form__select">
              <option value="TH/s">TH/s</option>
            </select>
            <Button>Calculate</Button>
          </form>

          <div className="revenue">
            <h4 className="revenue__head">ESTIMATED 24 HOUR REVENUE:</h4>
            <h2 className="revenue__amount">0.055 130 59 ETH ($1275)</h2>
            <span className="revenue__smallText">
              Revenue will change based on mining difficulty and Ethereum price.
            </span>
          </div>
        </RateCalculatorContainer>
      </EarningContents>
    </EearningContainer>
  );
}
