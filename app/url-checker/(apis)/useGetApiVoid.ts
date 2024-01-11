import { ApiVoidType } from '@/app/api/urlchecker/types'
import React from 'react'
import axios from 'axios'
import { useLanguage } from '@/lib/hooks/useLanguage'

export const useGetApiVoid = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [data, setData] = React.useState<ApiVoidType | null>(null)
  const {translations,language} = useLanguage()

  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

  const isValidUrl = (url: string) => {
    return urlRegex.test(url.trim())
  }

  const getData = () => {
    if (!isValidUrl(url)) {
      // setError('Url is not valid, it should start with http:// or https://')
      setError(translations[language]['urlIsNotValid'])
      return
    }
    setIsLoading(true)
    setError('')
    axios
      .post<ApiVoidType>(
        `/api/urlchecker`,
        { url },
      )
      .then(res => {
        setIsLoading(false)
        if (res.data.error) {
          setError(res.data.error)
          return
        } else {
          setData(res.data)
        }
      })
      .catch(err => {
        setIsLoading(false)
        setError(err.message)
      })
  }

  return { isLoading, error, url, setUrl, data, getData }
}
