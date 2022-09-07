import { Bitcoin, Eth, Litecoin } from "../../assets";


type DataProps = {
  currency: string;
  abv: string;
  text: string;
  icon?:  React.ReactNode;
  // icon?:  React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // icon?: React.Component<{}> | undefined;
  btnTxt?: string;
};

export const tradeData: DataProps[] = [
  {
    currency: "Bitcoin",
    abv: "BTC",
    text: "Digital currency in which a record of transactions is maintained.",
    icon: <Bitcoin className="icon" />,
    btnTxt: "Start mining",
  },
  {
    currency: "Ethereum",
    abv: "ETH",
    text: "Blockchain technology to create and run decentralized digital applications.",
    icon: <Eth className="icon" />,
  },
  {
    currency: "Litecoin",
    abv: "LTC",
    text: "Cryptocurrency that enables instant payments to anyone in the world.",
    icon: <Litecoin className="icon" />,
  },
];