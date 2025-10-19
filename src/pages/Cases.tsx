import React, { useEffect } from 'react';
import { useCasesData } from '../contexts/CasesDataContext';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';

const Cases: React.FC = () => {
  const { casesData } = useCasesData();
  const { getCases } = useCasesDataAPI();

  useEffect(() => {
    const logCases = async () => {
      const cases = await getCases();
      console.log('📦All cases from localStorage:', cases);
    };

    logCases();
  }, [casesData]); // re-run whenever casesData changes

  return (
    <div>
      <h2>Cases Component</h2>
      <p>Open the console to see logged case data.</p>
    </div>
  );
};

export default Cases;