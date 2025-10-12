import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Questionnaire from './Components/Questionnaire';
import Report from './Components/Report';

const theme = createTheme();

const NavTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={location.pathname} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
          <Tab label="Home" value="/" />
          <Tab label="Report" value="/report" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavTabs />
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Questionnaire />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
