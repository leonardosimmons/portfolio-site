import { HeadingProps } from '../../lib/components/heading/Heading';
import { LayoutProps } from '../../lib/components/layout/Layout';
import { DesktopNavbarProps } from '../../lib/components/navbar/DesktopNavbar';

// Data
export type HomePageData = {
  heading: {
    main: HeadingProps;
  };
  metaTitle: string;
  metaDesc: string;
  layout?: LayoutProps;
  nav?: {
    desktop?: DesktopNavbarProps;
  };
};

// General
export type Dimensions = {
  width: number | string;
  height: number | string;
};

export enum Viewport {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Mobile = 'mobile',
  Undefined = 'undefined',
}
