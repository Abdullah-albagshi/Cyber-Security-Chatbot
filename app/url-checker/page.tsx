'use client'

import React from 'react'
import ReportEngines from '@/components/ReportEngines';
import RiskScoreSummary from '@/components/RiskScoreSummary';
import { useGetApiVoid } from './(apis)/useGetApiVoid';
import { useTheme } from 'next-themes';

export default function page() {


  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const { isLoading, error, url, setUrl, data, getData } = useGetApiVoid();


  return <div className="flex justify-center items-center min-h-[95vh] w-[100%] bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
    <div className="flex flex-col items-center mt-8 p-8 rounded-md shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-4xl font-bold mb-8">URL Checker</h1>
      <div className="flex flex-col mb-4">
        <label className="mb-2">URL</label>
        <input
          type="text"
          value={url}
          placeholder='Enter URL'
          onChange={(e) => setUrl(e.target.value)}
          className="rounded-lg border px-4 py-2"
        />
      </div>

      <button onClick={getData} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Check URL</button>

      {isLoading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {data && error === '' && !isLoading && <div className="flex flex-col mt-8 gap-4">
        <RiskScoreSummary riskScore={data.data.report.risk_score.result} isDarkMode={isDarkMode} />
        <ReportEngines data={data} isDarkMode={isDarkMode} />
      </div>
      }
    </div>
  </div>
}

