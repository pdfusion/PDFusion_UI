import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Questionnaire from './pages/Questionnaire';
import Reports from './pages/Reports';
import Workspace from './pages/Workspace';

const theme = createTheme();

const NavTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Only highlight tabs that are in the nav bar
  const tabPaths = ['/', '/reports'];
  const currentTab = tabPaths.includes(location.pathname) ? location.pathname : false;

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={currentTab} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
          <Tab label="Cases" value="/" />
          <Tab label="Reports" value="/reports" />
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
            <Route path="/" element={<></>} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/workspace/:id" element={<Workspace />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
