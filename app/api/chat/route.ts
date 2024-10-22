import { OpenAIStream, StreamingTextResponse } from 'ai'

import OpenAI from 'openai'
import { auth } from '@/auth'
import { kv } from '@vercel/kv'
import { nanoid } from '@/lib/utils'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const { messages, previewToken } = json
    const userId = (await auth())?.user.id

    if (!userId) {
      return new Response('Unauthorized', {
        status: 401
      })
    }

    if (previewToken) {
      openai.apiKey = previewToken
    }

    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      stream: true
    })

    const assistantMessages = [
      {
        role: 'assistant',
        content:
          'You are a cyber security assistant. Write and run code to answer cyber security questions.'
      }
    ]
    const combinedMessages = [...assistantMessages, ...messages]

    const stream = OpenAIStream(res, {
      async onCompletion(completion) {
        const title = json.messages[0].content.substring(0, 100)
        const id = json.id ?? nanoid()
        const createdAt = Date.now()
        const path = `/chat/${id}`
        const payload = {
          id,
          title,
          userId,
          createdAt,
          path,
          messages: [
            {
              content:
                'You are a cyber security assistant. Write and run code to answer cyber security questions, and reject any that are not relevant.',
              role: 'system'
            },
            {
              content: completion,
              role: 'system'
            },
            ...combinedMessages
          ]
        }
        await kv.hmset(`chat:${id}`, payload)
        await kv.zadd(`user:chat:${userId}`, {
          score: createdAt,
          member: `chat:${id}`
        })
      }
    })

    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'An error occurred processing your request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
