import { NextApiRequest, NextApiResponse } from 'next'

export default async function getSMSCode(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send({ code: '000000', msg: '666666' })
}