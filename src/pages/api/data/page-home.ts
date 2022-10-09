import { NextApiRequest, NextApiResponse } from 'next';
import { HomePageData } from '../../../app/types';

export default function homePageData(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    heading: {
      main: {
        main: true,
        priority: true,
        captionAbove: true,
        caption: "Wouldn't it be nice...",
        heading: 'Become the',
        altHeading: 'Talk of the Town',
        body: 'Let us work together to get your message and brand out into the world.',
        image: '/images/cityscape.svg',
      },
    },
    metaDesc: '',
    metaTitle:
      'Full Stack Web Developer & Software Engineer Located In Portland, Oregon',
  } as HomePageData);
}
