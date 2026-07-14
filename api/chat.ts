import type { VercelRequest, VercelResponse } from '@vercel/node'
import { SYSTEM_PROMPT } from './_systemPrompt'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: 'Server misconfigured' })
    return
  }

  const messages: ChatMessage[] = Array.isArray(req.body?.messages) ? req.body.messages : []
  if (messages.length === 0) {
    res.status(400).json({ error: 'messages is required' })
    return
  }

  try {
    const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
        max_tokens: 300,
        temperature: 0.6,
      }),
    })

    if (!upstream.ok) {
      res.status(502).json({ error: 'Upstream error' })
      return
    }

    const data = await upstream.json()
    const reply = data?.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      res.status(502).json({ error: 'No response from model' })
      return
    }

    res.status(200).json({ reply })
  } catch {
    res.status(500).json({ error: 'Something went wrong' })
  }
}
