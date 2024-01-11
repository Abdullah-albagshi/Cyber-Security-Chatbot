import { useLanguage } from '@/lib/hooks/useLanguage'

const RiskScoreSummary = ({
  riskScore,
  isDarkMode
}: {
  riskScore: number
  isDarkMode: boolean
}) => {
  const { translations, language } = useLanguage()

  const getRiskLevel = (score: number) => {
    if (score === 0) {
      return translations[language]['safe']
    } else if (score > 0 && score <= 30) {
      return translations[language]['lowRisk']
    } else if (score > 30 && score <= 60) {
      return translations[language]['moderateRisk']
    } else if (score > 60 && score <= 80) {
      return translations[language]['highRisk']
    } else {
      return translations[language]['veryHighRisk']
    }
  }

  const getColorClass = (score: number) => {
    if (score === 0) {
      return 'text-green-500'
    } else if (score > 0 && score <= 30) {
      return 'text-blue-500'
    } else if (score > 30 && score <= 60) {
      return 'text-yellow-500'
    } else if (score > 60 && score <= 80) {
      return 'text-orange-500'
    } else {
      return 'text-red-500'
    }
  }


  return (
    <div
      className={`mt-6 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      } p-6 rounded-md shadow-md`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <h3 className="text-xl font-bold mb-4">
        {translations[language]['riskScoreSummary']}
      </h3>
      <p className={`font-bold ${getColorClass(riskScore)}`}>
        {translations[language]['riskScore']}{' '} {riskScore}
      </p>
      <p>
        {/* Risk Level:{' '} */}
        {translations[language]['riskLevel']} {' '}
        <span className={`font-bold ${getColorClass(riskScore)}`}>
          {getRiskLevel(riskScore)}
        </span>
      </p>
      {/* if risk score is above 50 avoid entring the website */}
      {riskScore > 30 && (
        <p className="mt-4">
          {/* This website is not safe to visit. */}
          {translations[language]['notSafeToVisit']}
        </p>
      )}
    </div>
  )
}

export default RiskScoreSummary
