
import { ImageLoader } from 'next/image';

//** -----------------------  CAROUSEL  ------------------------ **//
export type CarouselContext = {
  width: number;
  height: number;
  translate: number;
  transition: number;
  activeIndex: number;
  slideCount: number;
  dotCount: number[];
};

export type CarouselContentContext = {
  width: string;
  height: string;
  transform: string;
  transition: string;
  readonly display: string;
};


//** ------------------------  GENERAL  ------------------------ **/
export type Arrow = {
  container: {
    right: string;
    left: string;
  };
  arrow: {
    transform: string;
  };
};

export type BaseOptions = {
  bgImage?: string;
  classes?: string;
  column?: boolean;
  id?: string | number;
  index?: string | number;
  link?: string;
  main?: boolean;
  parent?: string;
  sub?: string;
  styles?: any;
  toggle?: boolean;
  type?: string;
  uppercase?: boolean;
  value?: any;
  video?: string;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clicked?: () => void;
};

export type Button = {
  text:  string | number | JSX.Element | HTMLElement;
  link: string;
  classes?: string;
  type?: "button" | "submit" | "reset";
  clicked?: () => void;
};

export type Direction = {
  up?: boolean;
  down?: boolean;
  right?: boolean;
  left?: boolean;
};

export type Dot = {
  active: boolean;
  index: number;
};

export type Grid = {
  grid: any;
  even?: boolean;
  oneXtwo?: boolean;
  twoXone?: boolean;
  blockOne?: JSX.Element | HTMLElement;
  blockTwo?: JSX.Element | HTMLElement;
  blockThree?: JSX.Element | HTMLElement;
  styles?: any;
};

export type Heading = Text & {
  btn?: Button;
  textAbove?: string;
  textBelow?: string;
};

export type Header = Heading & {
  id?: string;
  video?: string;
  bgImage?: string;
  priority?: string;
};

export type Icon = Image & Direction & PageLink;

export type Image = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  layout?: 'fixed' | 'intrinsic' | 'responsive' | undefined;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  loader?: ImageLoader;
};

export type Input = {
  value: any;
  col?: boolean;
  toggle?: boolean;
  placeholder?: string;
  autoComplete?: boolean;
  label?: string | JSX.Element | HTMLElement;
  labelFront?: string | JSX.Element | HTMLElement;
  labelBack?: string | JSX.Element | HTMLElement;
  clicked?: () => void;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
};

export type PageLink = {
  link: string;
  text?: string;
  name?: string;
  type?: string;
};

export type NamedLink = {
  name: string;
  link: string;
};

export type Styles = {
  styles: any;
  classes?: string;
};

export type Text = {
  name?: string;
  title?: string;
  text?: string;
  heading?: string | JSX.Element | HTMLElement;
  mainHeading?: string | JSX.Element | HTMLElement;
  headingOne?: string | JSX.Element | HTMLElement;
  headingTwo?: string | JSX.Element | HTMLElement;
  subHeadOne?:string | JSX.Element | HTMLElement;
  subHeadTwo?: string | JSX.Element | HTMLElement;
  textOne?: string | JSX.Element | HTMLElement;
  textTwo?: string | JSX.Element | HTMLElement;
  textThree?: string | JSX.Element | HTMLElement;
  textFour?: string | JSX.Element | HTMLElement;
  textFive?: string | JSX.Element | HTMLElement;
  spanOne?: string | JSX.Element | HTMLElement;
  spanTwo?: string | JSX.Element | HTMLElement;
  spanThree?: string | JSX.Element | HTMLElement;
  spanFour?: string | JSX.Element | HTMLElement;
  spanFive?: string | JSX.Element | HTMLElement;
  mainHeadingClasses?: string;
  headingOneClasses?: string;
  headingTwoClasses?: string;
  subHeadOneClasses?: string;
  subHeadTwoClasses?: string;
  textClasses?: string;
  textOneClasses?: string;
  textTwoClasses?: string;
  textThreeClasses?: string;
  textFourClasses?: string;
  textFiveClasses?: string;
  spanOneClasses?: string;
  spanTwoClasses?: string;
  spanThreeClasses?: string;
  spanFourClasses?: string;
  spanFiveClasses?: string;
};


//** --------------------  NAVIGATION BAR  -------------------- **//
export type NavbarMenuTab = Icon & {
  name: string;
  id?: string;
  type?: string;
};


export type DesktopNavbarConfiguration = {
  logo: Icon;
  tabs: NamedLink[];
};