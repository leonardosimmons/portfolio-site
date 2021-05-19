
import { NextApiRequest, NextApiResponse } from 'next';
import { IndexPageData } from '../../../utils/types';

export default function data(_: NextApiRequest, res: NextApiResponse<IndexPageData>): void 
{
  res.status(200).json(
    {
      title: 'Leonardo Simmons | Home',
      mainHeader: 
      [
        {
          textAbove: 'Easy Company',
          heading: 'I Want To Help Make Your Dream A Reality',
          textBelow: 'We all have goals and aspirations, I want to make sure you achieve yours.',
          btn: {
            text: 'About Me',
            link: '/about'
          },
          bgImage: '/images/svg/undraw_To_the_stars_qhyy.svg'
        },
        {
          textAbove: 'Wouldn\'t It Be Nice...',
          heading: 'Become the Talk of the Town',
          textBelow: 'Let us work together to get your message out and let everyone know exactly who you are and what you stand for,',
          btn: {
            text: 'Learn More',
            link: '/services'
          },
          bgImage: '/images/svg/undraw_quite_town_mg2q.svg'
        },
        {
          textAbove: 'Establish A System',
          heading: 'Desktop and Mobile Working Together',
          textBelow: 'I build systems that connect all the dots together and works synchronously with as one to drive in the results you desire.',
          btn: {
            text: 'A Closer Look',
            link: '/portfolio'
          },
          bgImage: '/images/svg/undraw_two_factor_authentication_namyy.svg'
        },
      ],
      sectionOne: {
        images: 
        [
          { src: '/images/svg/undraw_server_cluster_jwwq.svg', alt: 'photo' },
          { src: '/images/svg/undraw_web_developer_p3e5.svg', alt: 'photo' },
        ],
        heading: {
          lineOne: 'Who am I?',
          lineTwo: 'A',
          lineThree: 'Full Stack',
          lineFour: 'Web Developer'
        },
        body: 'Hello there! My name is Leonardo Simmons and I am a Full Stack Web Developer and Software Engineer. I specialize in building completely custom websites and applications.'
      },
      missionStatement: {
        heading: 'Mission Statement',
        text: {
          blockOne: 'Meet goals through not only concise and scalable code but productive communication to ensure the end product is exactly as envisioned.',
          blockTwo: 'Contribute to open source and other community projects to not only the benefit of the community, but to also gain new knowledge and experience to only enhance my ability as a developer in the ever changing industry.'
        }
      }
    }
  );
};