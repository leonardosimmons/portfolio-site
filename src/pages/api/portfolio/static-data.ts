import { NextApiRequest, NextApiResponse } from "next";



export default function data(_: NextApiRequest, res: NextApiResponse): void
{
  res.status(200).json
  (
    [
      {
        src: '/images/astoria-preview.png',
        title: 'Project Astoria',
        type: 'eCommerce store',
        text: {
          lineOne: 'Project Astoria is a mock full-stack ecommerce store built in typescript. ',
          lineTwo: 'The UI was done using React, Redux was used for state management and SCSS modules for styling. ',
          lineThree: 'It is powered by a backend api made using node/express and connects with a MySQL (mariaDB) database running off an apache server.',
        },
        link: {
          demo: '',
          client: 'https://github.com/leonardosimmons/project-astoria-front-end',
          server: 'https://github.com/leonardosimmons/node-server/tree/master/src/servers/astoria'
        }
      }
    ]
  )
};