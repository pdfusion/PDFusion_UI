import React from 'react';
import { Typography } from '@mui/material';

const Workspace: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Workspace
      </Typography>
      <Typography>
        This is the workspace area. You can view the study's information.
      </Typography>
    </div>
  );
};

export default Workspace;