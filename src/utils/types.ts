
import { AxiosResponse } from 'axios';
import { ImageLoader } from 'next/image';

//** ---------------------  CONTACT PAGE  ---------------------- **//
export type ContactPageData = {
  title: string;
  header: {
    src: string;
    text: string;
  };
  heading: Text;
  placeholders: Text[];
};

export type ContactPageStaticData = {
  nav: NavbarConfiguration;
  page: ContactPageData;
  footer: Footer;
};

export type ContactMeForm = {
  firstname: string;
  lastname: string;
  subject: string;
  email: string;
  message: string;
};

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


//** ------------------------  GENERAL  ------------------------ **//
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

export type Combinable = string | number;

export type Direction = {
  up?: boolean;
  down?: boolean;
  right?: boolean;
  left?: boolean;
};

export type Dot = {
  active: boolean;
  index: number;
  parent?: string;
};

export type FlipCard = {
  heading: string;
  details: Text[];
  price: {
    text: string;
    value: string;
  };
};

export type Footer = {
  links: NamedLink[];
  logo: Image;
  copyright: string;
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
  textAbove?: string | JSX.Element | HTMLElement;
  textBelow?: string | JSX.Element | HTMLElement;
};

export type Header = Heading & {
  id?: string;
  video?: string;
  bgImage?: string;
  priority?: string;
};

export type HttpHeader = {
  'Content-Type'?: string;
  'auth-token'?: string; 
};

export type HttpRequest = {
  url: string;
  type: 'GET' | 'POST' | 'DELETE' | 'PUT';
  post?: any;
  query?: string;
};

export type HttpResponse = {
  msesage: string;
  data?: any;
  payload?: any;
  value?: any;
  type?: string;
};

export type HttpServerResponse = AxiosResponse | false;

export type Icon = Image & Direction & PageLink;

export type Image = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
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

export type Logo = Omit<Image, "src"|"alt"|"width"|"height"> & {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  index?: number;
} & Omit<Text, "text"> & { text?: string };

export type NamedLink = {
  name: string;
  link: string;
};

export type PageLink = {
  link: string;
  text?: string;
  name?: string;
  type?: string;
};

export type Styles = {
  styles?: any;
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
  lineOne?: string | JSX.Element | HTMLElement;
  lineTwo?: string | JSX.Element | HTMLElement;
  lineThree?: string | JSX.Element | HTMLElement;
  lineFour?: string | JSX.Element | HTMLElement;
  lineFive?: string | JSX.Element | HTMLElement;
  spanOne?: string | JSX.Element | HTMLElement;
  spanTwo?: string | JSX.Element | HTMLElement;
  spanThree?: string | JSX.Element | HTMLElement;
  spanFour?: string | JSX.Element | HTMLElement;
  spanFive?: string | JSX.Element | HTMLElement;
  body?: string | JSX.Element | HTMLElement;
  mainHeadingClasses?: string;
  headingClasses?: string;
  headingOneClasses?: string;
  headingTwoClasses?: string;
  subHeadOneClasses?: string;
  subHeadTwoClasses?: string;
  textClasses?: string;
  lineOneClasses?: string;
  lineTwoClasses?: string;
  lineThreeClasses?: string;
  lineFourClasses?: string;
  lineFiveClasses?: string;
  spanOneClasses?: string;
  spanTwoClasses?: string;
  spanThreeClasses?: string;
  spanFourClasses?: string;
  spanFiveClasses?: string;
  bodyClasses?: string;
};

export type Video = {
  src: string;
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
};

//** ----------------------  INDEX PAGE  ---------------------- **//
export type IndexPageAboutSection = {
  images: Image[];
  heading: Text;
  body: string;
};

export type IndexPageMissionStatement = {
  heading: string;
  text: {
    blockOne: string;
    blockTwo: string;
  }
};

export type IndexPageFeaturesSection = {
  heading: Text & {
    btn: Button;
  };
  card: Text;
  image: Image;
};

export type IndexPageServicesSection = {
  heading: Text;
  cards: FlipCard[];
  btn: Button;
};

export type IndexPageData = {
  title: string;
  mainHeader: Header[];
  about: IndexPageAboutSection;
  mission: IndexPageMissionStatement;
  features: IndexPageFeaturesSection;
  services: IndexPageServicesSection;
};

export type IndexPageStaticData = {
  nav: NavbarConfiguration;
  page: IndexPageData;
  footer: Footer;
};


//** --------------------  NAVIGATION BAR  -------------------- **//
export type NavbarMenuTab = Image & NamedLink;

export type DesktopNavbarConfiguration = {
  logo: Icon;
  tabs: NavbarMenuTab[];
};

export type MobileNavbarConfiguration = {
  logo: Icon;
  tabs: NamedLink[];
};

export type NavbarConfiguration = {
  desktop: DesktopNavbarConfiguration;
  mobile: MobileNavbarConfiguration;
};


//** --------------------  PORTFOLIO PAGE  -------------------- **//
export type ProjectToken = {
  src: string;
  title: string;
  type: string;
  text: Text;
  mobileText: string;
  link: {
    demo: string;
    client?: string;
    server?: string;
  };
};

export type PortfolioPageData = {
  header: {
    src: string;
    text: string;
  };
  projects: Array<ProjectToken>;
};

export type PortfolioPageStaticData = {
  nav: NavbarConfiguration;
  page: PortfolioPageData
  footer: Footer;
};
