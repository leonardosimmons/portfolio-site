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
        // { name: 'Services', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
        { name: 'About', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
        { name: 'Portfolio', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
        { name: 'Contact Me', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 }
      ]
    }
  )
};