
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
            link: '#about'
          },
          bgImage: '/images/svg/undraw_To_the_stars_qhyy.svg'
        },
        {
          textAbove: 'Wouldn\'t It Be Nice...',
          heading: 'Become the Talk of the Town',
          textBelow: 'Let us work together to get your message out and let everyone know exactly who you are and what you stand for.',
          btn: {
            text: 'Learn More',
            link: '#features'
          },
          bgImage: '/images/svg/undraw_quite_town_mg2q.svg'
        },
        {
          textAbove: 'Establish A System',
          heading: 'Desktop and Mobile Working Together',
          textBelow: 'I build systems that connect all the dots together and work synchronously as one to drive in the results you desire.',
          btn: {
            text: 'A Closer Look',
            link: '/portfolio'
          },
          bgImage: '/images/svg/undraw_two_factor_authentication_namyy.svg'
        },
      ],
      about: {
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
      mission: {
        heading: 'Mission Statement',
        text: {
          blockOne: 'Meet goals through not only concise and scalable code but productive communication to ensure the end product is exactly as envisioned.',
          blockTwo: 'Contribute to open source and other community projects to not only the benefit of the community, but to also gain new knowledge and experience to only enhance my ability as a developer in the ever changing industry.'
        }
      },
      features: {
        heading: {
          spanOne: 'Take control',
          spanTwo: 'I Build',
          spanThree: 'Professional Websites and Applications',
          body: 'In today\'s world one thing is forsure, No Website Means Losing Business. By having your own website or application you not only increase your branding, credibility and sale capabilites but also greatly increase the flexibiliy and control you have over your business.',
          btn: {
            text: 'My Work',
            link: '/portfolio'
          }
        },
        card: {
          lineOne: '"Your business is your livelyhood and for that I always commit to delivering a product that is up to specifications and within the allotted deadline."',
          lineTwo: 'Leonardo Simmons',
          lineThree: 'Easy Company'
        },
        image: { src: '/images/svg/undraw_real-time_sync_o57k.svg', alt: 'photo' }
      },
      services: {
        heading: {
          spanOne: 'Always here for you',
          spanTwo: 'Available Services'
        },
        cards: 
        [
          {
            heading: 'Responsive Websites',
            details: 
            [
              { text: 'Completely custom website'},
              { text: 'Tailored to your business needs'},
              { text: 'Responsive desktop and mobile friendly'},
              { text: 'Ecommerce, B2B, or personal sites'},
              { text: 'Optional database to store and track data'},
            ],
            price: {
              text: 'Responsive Websites',
              value: 'A business\'s online presence, regardless of industry, can have a massive impact on it\'s success. Many businesses still do not realize that a majority of their customers will visit their website before making a purchase. This is why having an up to date, response and mobile friendly site is so important. Having a website to call your own allows you the ability to establish credibility, create a brand, and provide a user experince for you customers that will having them coming back'
            }
          },
          {
            heading: 'Business Applications',
            details: 
            [
              { text: 'B2B, B2C, Internal Applications, or API\'s'},
              { text: 'Built to scale with your business'},
              { text: 'Custom design and unique features'},
              { text: 'Increase customer loyalty & sales'},
              { text: 'Optional maintainance and support plans'},
            ],
            price: {
              text: 'Business Apps',
              value: 'Business applications provide a software solution in solving a business problem that you may have. Business apps can optimize the business process to imporve effeciency, and empower workers to allow them to stay connected with each other and the office for real-time insights. They also increase customer engagement, boosting loyalty and sales. '
            }
          },
          {
            heading: 'SEO and Digital Marketing',
            details: 
            [
              { text: 'Top the google search results'},
              { text: 'Reach thousands of customers daily'},
              { text: 'Create and establish an online brand'},
              { text: 'Build social credibility'},
              { text: 'Increase sales!'},
            ],
            price: {
              text: 'SEO and Digital Marketing',
              value: 'Customer engagement and driving organic traffic to your business is the name of the game. Establish an online brand and presence for your business and build social credibility amognst new and old customers. The power of SEO and Digital Marking allow you to reach thousands of new and old customers daily. Rank your page with google and begin to appear on the front page of google search results massively increasing new customer traffic to your site.'
            }
          },
        ],
        btn: {
          text: 'More Information',
          link: '/contact'
        }
      }
    }
  );
};