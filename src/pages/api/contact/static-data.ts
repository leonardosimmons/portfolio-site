
import { NextApiRequest, NextApiResponse } from "next";
import { ContactPageData } from "../../../utils/types";


export default function contactPageData(_: NextApiRequest, res: NextApiResponse<ContactPageData>): void 
{
  res.status(200).json
  (
    {
      title: 'Leonardo Simmons | Contact Me',
      heading: {
        spanOne: 'Write a Message',
        spanTwo: 'Contact Me',
        body: 'We love challenges and work with any type of projects: financial debt, rebranding, company\'s audit - we can handle all your requests'
      },
      placeholders:
      [
        {text: 'First Name'},
        {text: 'Last Name'},
        {text: 'Subject'},
        {text: 'Email'},
      ]
    }
  )
};
