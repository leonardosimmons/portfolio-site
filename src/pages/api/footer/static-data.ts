
import { NextApiRequest, NextApiResponse } from 'next';
import { Footer } from '../../../utils/types';


export default function footerData(_: NextApiRequest, res: NextApiResponse<Footer>): void
{
  res.status(200).json
  (
    {
      links:
      [
        { name: 'Home', link: '/'},
        { name: 'Portfolio', link: '/portfolio'},
        { name: 'Contact', link: '/contact'},
      ],
      logo: { src: '/images/png/logo.png', alt: 'logo', width: 100, height: 100},
      copyright: 'Built by Leonardo Simmons.'
    }
  )
};
