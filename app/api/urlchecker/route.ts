import { ApiVoidType } from './types'
import axios from 'axios'

export async function POST(req: Request) {
  const json = await req.json()
  const { url } = json
  console.log('object')
  const res = await fetch(
    `https://endpoint.apivoid.com/urlrep/v1/pay-as-you-go/?key=${process.env.NEXT_PUPLIC_API_VOID}&url=${url}`,
    {
      method: 'GET'
    }
  )

  const data = await res.json()

  return Response.json(data)
}
