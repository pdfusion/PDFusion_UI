import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';
import { defaultCaseData, type CaseDataType } from '../contexts/CasesDataContext';
import { defaultUserData, type UserDataType } from '../contexts/UsersDataContext';
import { useUsersDataAPI } from '../hooks/useUsersDataAPI';

const CaseDashboard: React.FC = () => {
  const [caseData, setCaseData] = useState<CaseDataType>(defaultCaseData);
  const [patientData, setPatientData] = useState<UserDataType>(defaultUserData);
  const [caseManagerData, setCaseManagerData] = useState<UserDataType>(defaultUserData);
  const { id } = useParams<{ id: string }>();
  const { getCaseById } = useCasesDataAPI();
  const { getUserById } = useUsersDataAPI();

  useEffect(() => {
    (async () => {
      const caseDataRes = await getCaseById(id as string);
      const patientDataRes = await getUserById(caseDataRes.patientId);
      const caseManagerDataRes = await getUserById(caseDataRes.caseManagerId);

      setCaseData(caseDataRes);
      setPatientData(patientDataRes);
      setCaseManagerData(caseManagerDataRes);
    })();
  }, []);
  
  //TODO: Remove below console.logs when table is ready.
  console.log('sr log caseData:', caseData);
  console.log('sr log patientData:', patientData);
  console.log('sr log caseManagerData:', caseManagerData);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Case Dashboard: {id}
      </Typography>
      <Typography>
        This is the case dashboard for Patient <strong>{patientData.name}</strong>, Case Manager <strong>{caseManagerData.name}</strong>.
      </Typography>
      <p>Open the console to see complete case data.</p>
    </div>
  );
};

export default CaseDashboard;