import { streamText } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import Anthropic from '@anthropic-ai/sdk'

// Create Anthropic client
const anthropicClient = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

// IMPORTANT: Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Initial system message to set context
    const systemMessage = {
      role: 'system',
      content: 'You are Claude, a helpful AI assistant. Respond concisely and accurately.'
    }

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((message: any) => ({
      role: message.role === 'user' ? 'user' : 'assistant',
      content: message.content
    }))

    const result = await streamText({
      model: anthropic('claude-3-sonnet-20240229'),
      messages: [systemMessage, ...anthropicMessages],
      maxTokens: 4096,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error('Error in Anthropic chat route:', error)
    return new Response(
      JSON.stringify({ error: 'There was an error processing your request' }), 
      { status: 500 }
    )
  }
}
