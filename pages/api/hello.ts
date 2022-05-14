import { notionConfig } from './../../config/index';
import { getDatabase,getPage } from './../../lib/notion';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string,
  old: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const database = await getDatabase(notionConfig.databaseId);
  // const databaseParent = await getPage("10ba643f-1276-4e9d-8540-a4ec25aff932");

  // console.log(JSON.stringify(database));
  
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json({
    name:'test',
    old: 15,
    data: database,
  })
}
