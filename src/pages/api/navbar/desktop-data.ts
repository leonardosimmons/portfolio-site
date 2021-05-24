import { NextApiRequest, NextApiResponse } from 'next';
import { DesktopNavbarConfiguration } from '../../../utils/types';

export default function desktopData(_: NextApiRequest, res: NextApiResponse<DesktopNavbarConfiguration>): void
{
  res.status(200).json
  (
    {
      logo: {
        link: '/',
        src: '/images/png/logo.png',
        alt: 'logo',
        width: 75,
        height: 75
      },
      tabs: [
        { name: 'Home', link: '/', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
        { name: 'Portfolio', link: '/portfolio', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
        { name: 'Contact Me', link: '/contact', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 }
      ]
    }
  )
};