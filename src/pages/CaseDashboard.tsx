import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Paper, Grid } from '@mui/material';
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
  }, [id]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Case Dashboard
      </Typography>

      {/* Patient Info */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Patient Information
        </Typography>
        <Typography>Name: {patientData?.name || 'N/A'}</Typography>
        <Typography>Age: {patientData?.age || 'N/A'}</Typography>
      </Paper>

      {/* Case Manager Info */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Case Manager
        </Typography>
        <Typography>Name: {caseManagerData?.name || 'N/A'}</Typography>
      </Paper>

      {/* Scores */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Questionnaire Scores
        </Typography>
        <Grid container spacing={2}>
          {/* @ts-ignore - Grid contains item prop */}
          <Grid item xs={6}>
            <Typography>
              <strong>General Fatigue Score:</strong> {caseData.scores?.generalFatigueScore}
            </Typography>
          </Grid>
          {/* @ts-ignore - Grid contains item prop */}
          <Grid item xs={6}>
            <Typography>
              <strong>Physical Fatigue Score:</strong> {caseData.scores?.physicalFatigueScore}
            </Typography>
          </Grid>
          {/* @ts-ignore - Grid contains item prop */}
          <Grid item xs={6}>
            <Typography>
              <strong>Reduced Activity Score:</strong> {caseData.scores?.reducedActivityScore}
            </Typography>
          </Grid>
          {/* @ts-ignore - Grid contains item prop */}
          <Grid item xs={6}>
            <Typography>
              <strong>Reduced Motivation Score:</strong> {caseData.scores?.reducedMotivationScore}
            </Typography>
          </Grid>
          {/* @ts-ignore - Grid contains item prop */}
          <Grid item xs={6}>
            <Typography>
              <strong>Mental Fatigue Score:</strong> {caseData.scores?.mentalFatigueScore}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CaseDashboard;