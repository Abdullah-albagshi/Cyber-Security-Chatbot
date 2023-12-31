import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import { UseChatHelpers } from 'ai/react'

const exampleMessages = [
  // give me a cybersecurity plan
  {
    heading: 'Give me a cybersecurity plan',
    message: 'Give me a cybersecurity plan'
  },
  // how do I create a cybersecurity plan for my company?
  {
    heading: 'How do I create a cybersecurity plan for my company?',
    message: 'How do I create a cybersecurity plan for my company?'
  },
  // how to generate a secure password?
  {
    heading: 'How to generate a secure password?',
    message: 'How to generate a secure password?'
  },
  // how can i know if the url is safe?
  {
    heading: 'How can I know if the URL is safe?',
    message: 'How can I know if the URL is safe?'
  },
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h2 className="text-2xl font-bold mb-4">Hello! I am an advanced chatbot specializing in cyber security.</h2>
        <p className="mb-4">{"My goal is to help you create a strong and reliable cybersecurity plan for your company. With your input on data storage and sharing practices, I can offer expert guidance on developing an effective strategy. I'll provide recommendations on encryption methods, firewall creation, and policies to safeguard against suspicious activities and potential threats."}</p>
        <p className="mb-4">How can I assist you in building a robust cybersecurity plan for your company?</p>
        <div className="flex flex-col space-y-4">
          {exampleMessages.map(({ heading, message }) => (
            <Button
              key={heading}
              variant="outline"
              className="flex items-center justify-between"
              onClick={() => setInput(message)}
            >
              <span>{heading}</span>
              <IconArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ))}
        
        </div>
      </div>
    </div>
  )
}
