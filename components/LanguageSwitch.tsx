'use client'
import { useLanguage } from '@/lib/hooks/useLanguage'
import React from 'react'

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage()
  return (
    <div className="flex items-center">
      <button
        className={`px-2 py-1 rounded-md ${
          language === 'en' ? 'bg-gray-200 dark:bg-gray-800' : ''
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded-md ${
          language === 'ar' ? 'bg-gray-200 dark:bg-gray-800' : ''
        }`}
        onClick={() => setLanguage('ar')}
      >
        العربية
      </button>
    </div>
  )
}

export default LanguageSwitch
