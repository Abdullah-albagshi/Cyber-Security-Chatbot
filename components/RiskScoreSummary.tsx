const RiskScoreSummary = ({ riskScore, isDarkMode }: { riskScore: number, isDarkMode: boolean }) => {
  const getRiskLevel = (score: number) => {
    if (score === 0) {
      return 'Safe';
    } else if (score > 0 && score <= 30) {
      return 'Low Risk';
    } else if (score > 30 && score <= 60) {
      return 'Moderate Risk';
    } else if (score > 60 && score <= 80) {
      return 'High Risk';
    } else {
      return 'Very High Risk';
    }
  };

  const getColorClass = (score: number) => {
    if (score === 0) {
      return 'text-green-500';
    } else if (score > 0 && score <= 30) {
      return 'text-blue-500';
    } else if (score > 30 && score <= 60) {
      return 'text-yellow-500';
    } else if (score > 60 && score <= 80) {
      return 'text-orange-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <div className={`mt-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} p-6 rounded-md shadow-md`}>
      <h3 className="text-xl font-bold mb-4">Risk Score Summary</h3>
      <p className={`font-bold ${getColorClass(riskScore)}`}>
        Risk Score: {riskScore}
      </p>
      <p>
        Risk Level: <span className={`font-bold ${getColorClass(riskScore)}`}>{getRiskLevel(riskScore)}</span>
      </p>
      {/* if risk score is above 50 avoid entring the website */}
      {riskScore > 50 && <p className="mt-4">This website is not safe to visit</p>}
    </div>
  );
};

export default RiskScoreSummary;