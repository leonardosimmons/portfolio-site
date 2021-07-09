
import { NextApiRequest, NextApiResponse } from "next";
import { ContactPageData } from "../../../utils/types";


export default function contactPageData(_: NextApiRequest, res: NextApiResponse<ContactPageData>): void 
{
  res.status(200).json
  (
    {
      title: 'Leonardo Simmons | Contact Me',
      heading: {
        spanOne: 'Leave a Message',
        spanTwo: 'Contact Me',
        body: 'I love challenges and work with any type of project: Websites, Business Applications, SEO and Digital Marketing - I can handle all your requests.'
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
