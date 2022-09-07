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