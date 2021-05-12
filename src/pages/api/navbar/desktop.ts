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
        width: 60,
        height: 60
      },
      tabs: [
        { name: 'Services', link: '/under-construction' },
        { name: 'About', link: '/under-construction' },
        { name: 'Portfolio', link: '/under-construction' },
        { name: 'Contact Me', link: '/under-construction' }
      ]
    }
  )
};