
import { NextApiRequest, NextApiResponse } from 'next';

export default function data(_: NextApiRequest, res: NextApiResponse): void 
{
  res.status(200).json(
    {

    }
  )
};