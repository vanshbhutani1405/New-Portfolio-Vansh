import type { VercelRequest, VercelResponse } from '@vercel/node'
import { SYSTEM_PROMPT } from './_systemPrompt.js'

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
    console.error('[api/chat] GROQ_API_KEY is not set in the environment')
    res.status(500).json({ error: 'Server misconfigured' })
    return
  }

  const messages: ChatMessage[] = Array.isArray(req.body?.messages) ? req.body.messages : []
  if (messages.length === 0) {
    console.error('[api/chat] Invalid request body — expected { messages: [...] }, got:', typeof req.body)
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
      const errorBody = await upstream.text()
      console.error(`[api/chat] Groq returned ${upstream.status} ${upstream.statusText}: ${errorBody}`)
      res.status(502).json({ error: 'Upstream error' })
      return
    }

    const data = await upstream.json()
    const reply = data?.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      console.error('[api/chat] Groq responded 200 but no content found. Payload:', JSON.stringify(data))
      res.status(502).json({ error: 'No response from model' })
      return
    }

    res.status(200).json({ reply })
  } catch (err) {
    console.error('[api/chat] Unexpected error while calling Groq:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
}
