import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type CaseDataType, defaultCaseData } from '../contexts/CasesDataContext';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';
import PDButton from '../components/widgets/PDButton';

const Cases: React.FC = () => {
  const [casesData, setCasesData] = useState<CaseDataType[]>([defaultCaseData]);
  const { getCases } = useCasesDataAPI();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const casesDataRes = await getCases();
      if (casesDataRes) setCasesData(casesDataRes);
    })();
  }, []);

  const handleCreateCase = () => {
    navigate('/questionnaire');
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <h2>Cases</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Case ID</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Patient ID</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Patient Name</th>
            </tr>
          </thead>
          <tbody>
            {casesData && casesData.length > 0 ? (
              casesData.map((caseItem) => (
                <tr key={caseItem.id}>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <Link to={`/cases/${caseItem.id}`}>{caseItem.id}</Link>
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{caseItem.patientId}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    {caseItem.formData?.name || 'N/A'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center', padding: '8px' }}>
                  No cases available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <PDButton
        buttonType={"create"}
        handleClick={handleCreateCase}
        caption={"Create Case"}
      />
    </div>
  );
};

export default Cases;