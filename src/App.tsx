import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Questionnaire from './Components/Questionnaire';

const theme = createTheme(); // You can customize this if needed

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Questionnaire />
      </Container>
    </ThemeProvider>
  );
};

export default App;