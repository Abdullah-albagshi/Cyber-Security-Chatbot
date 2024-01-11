// en, ar

import React, { useContext, useEffect } from 'react'

import { translations } from '../../translations'

type LanguageContextType = {
  language: 'en' | 'ar'
  setLanguage: (language: 'en' | 'ar') => void
  translations: any
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: translations
})

export const LanguageProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [language, setLanguage] = React.useState<'en' | 'ar'>('' as 'en' | 'ar')
  useEffect(() => {
    const localLanguage = localStorage.getItem('language')
    if (language) {
      localStorage.setItem('language', language)
      return
    }
    if (!!localLanguage) {
      localStorage.setItem('language', language)
    }
    if (localLanguage) {
      setLanguage(localLanguage as 'en' | 'ar')
    } else {
      setLanguage('en')
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
