import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const CaseDashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Case Dashboard: {id}
      </Typography>
      <Typography>
        This is the case dashboard for ID <strong>{id}</strong>. You can load specific data or components based on this ID.
      </Typography>
    </div>
  );
};

export default CaseDashboard;