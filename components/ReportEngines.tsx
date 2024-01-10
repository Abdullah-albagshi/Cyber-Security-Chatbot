import { ApiVoidType } from "@/app/api/urlchecker/types";
import Link from "next/link";
import React from "react";

const ReportEngines = ({ data, isDarkMode }: { data: ApiVoidType, isDarkMode: boolean }) => {
  const { domain_blacklist } = data.data.report;
  const engines = domain_blacklist.engines;

  // Split the engines into groups of three
  const engineGroups = [];
  for (let i = 0; i < engines.length; i += 3) {
    engineGroups.push(engines.slice(i, i + 3));
  }

  const getRowClass = (index: number) => {
    return index % 2 === 0 ? (isDarkMode ? 'bg-gray-800' : 'bg-gray-200') : '';
  };

  const getStatusColorClass = (detected: boolean) => {
    return detected ? (isDarkMode ? 'text-red-500' : 'text-red-700') : (isDarkMode ? 'text-green-500' : 'text-green-700');
  };


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Report Details</h2>
      <div className={`mx-auto mt-8 ${isDarkMode ? 'dark:bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <table className="w-full border border-collapse">
          <thead>
            <tr className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-300'}`}>
              <th className="py-2 px-4 border">Engine Name</th>
              <th className="py-2 px-4 border">Engine URL</th>
              <th className="py-2 px-4 border">Detected</th>
            </tr>
          </thead>
          <tbody>
            {engineGroups.map((engineGroup, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {engineGroup.map((engine, index) => (
                  <tr key={engine.name} className={getRowClass(groupIndex * 3 + index)}>
                    <td className="py-2 px-4 border">{engine.name}</td>
                    <td className="py-2 px-4 border">
                      <p rel="noopener noreferrer" className="text-blue-500">
                        {engine.reference}
                      </p>
                    </td>
                    <td className={`py-2 px-4 border ${getStatusColorClass(engine.detected)}`}>
                      {engine.detected ? 'Detected' : 'Not Detected'}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4">Total Detections: {domain_blacklist.detections}</p>
    </div>
  );
}

export default ReportEngines;

