import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const Workspace: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Workspace: {id}
      </Typography>
      <Typography>
        This is the workspace for ID <strong>{id}</strong>. You can load specific data or components based on this ID.
      </Typography>
    </div>
  );
};

export default Workspace;