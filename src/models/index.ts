export type marketProps = {
  title: string;
  text: string;
  image: string;
  className?: string;
  direction?: boolean;
}; 

export type DataProps = {
  currency: string;
  abv: string;
  text: string;
  icon?: React.ReactNode;
  btnTxt?: string;
};

export type MenuProps = {
  link: string;
};



export interface FooterProps {
  firstLinks: Array<{
    link: string;
  }>;
  secondLinks: Array<{
    link: string;
  }>;
}