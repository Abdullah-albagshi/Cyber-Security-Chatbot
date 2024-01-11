'use client'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import { UseChatHelpers } from 'ai/react'
import { useLanguage } from '@/lib/hooks/useLanguage'


export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  const { translations, language } = useLanguage()

const exampleMessages = [
  // give me a cybersecurity plan
  {
    heading: translations[language]['heading1']
  },
  // how do I create a cybersecurity plan for my company?
  {
    heading: translations[language]['heading2']
  },
  // how to generate a secure password?
  {
    heading: translations[language]['heading3']
  },
  // how can i know if the url is safe?
  {
    heading: translations[language]['heading4']
  }
]
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="text-2xl font-bold mb-4">
          {translations[language][`welcomeText1`]}
        </h2>
        <p className="mb-4"> {translations[language][`welcomeText2`]} </p>
        {/* {"My goal is to help you create a strong and reliable cybersecurity plan for your company. With your input on data storage and sharing practices, I can offer expert guidance on developing an effective strategy. I'll provide recommendations on encryption methods, firewall creation, and policies to safeguard against suspicious activities and potential threats."}</p> */}
        {/* <p className="mb-4">How can I assist you in building a robust cybersecurity plan for your company?</p> */}
        <p className="mb-4"> {translations[language][`welcomeText3`]} </p>
        <div className="flex flex-col space-y-4">
          {exampleMessages.map(({ heading }) => (
            <Button
              key={heading}
              variant="outline"
              className="flex items-center justify-between"
              onClick={() => setInput(heading)}
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
