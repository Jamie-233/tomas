// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { mock, Random } from 'mockjs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({
      'list|1-10': [{
        'name|1': [Random.name(), Random.name(), Random.name()],
        'id|+1': [Random.id(), Random.id(), Random.id()],
        'address': Random.county(),
      }]
    })
  )
}
