import { Chart, Statistics, TableChart } from "../../assets";
import { marketProps } from "../../models";




export const marketData: marketProps[] = [
  {
    title: "Invest Smart",
    text: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. ",
    image: Chart,
  },
  {
    title: "Detailed Statistics",
    text: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
    image: Statistics,
      className: "statistics__image",
    direction: true,
  },

  {
    title: "Grow your profit and track your investments",
      text: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
    image: TableChart,
  },
];