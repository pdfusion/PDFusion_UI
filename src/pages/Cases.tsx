import React, { useEffect, useState } from 'react';
import { type CaseDataType, defaultCaseData } from '../contexts/CasesDataContext';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';

const Cases: React.FC = () => {
  const [casesData, setCasesData] = useState<CaseDataType[]>([defaultCaseData]);
  const { getCases } = useCasesDataAPI();

  useEffect(() => {
    (async () => {
      const casesDataRes = await getCases();
      setCasesData(casesDataRes);
    })();
  }, []);
  
  //TODO: Remove below console.log when table is ready.
  console.log('sr log casesData:', casesData);

  return (
    <div>
      <h2>Cases Component</h2>
      <p>Open the console to see logged cases data.</p>
    </div>
  );
};

export default Cases;