import React, { useEffect, useState } from 'react';
import { type CaseDataType, defaultCaseData } from '../contexts/CasesDataContext';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';

const Cases: React.FC = () => {
  const [casesData, setCasesData] = useState<CaseDataType[]>([defaultCaseData]);
  const { getCases } = useCasesDataAPI();

  useEffect(() => {
    const logCases = async () => {
      const casesDataRes = await getCases();
      setCasesData(casesDataRes);
      console.log('sr log casesData:', casesDataRes);
    };

    logCases();
  }, []);

  return (
    <div>
      <h2>Cases Component</h2>
      <p>Open the console to see logged case data.</p>
    </div>
  );
};

export default Cases;