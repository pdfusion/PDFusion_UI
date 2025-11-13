import React, { useEffect } from 'react';
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
import { CasesDataProvider } from './contexts/CasesDataContext';
import Questionnaire from './pages/Questionnaire';
import Fatigue from './pages/FatigueSeverityForm.tsx';
import Gaming from './pages/GamingHabitsForm.tsx';
import MFI from './pages/MFIForm.tsx';
import STAI1 from './pages/STAI1Form.tsx';
import PANASSF from './pages/PANAS-SFForm.tsx';
import CESD from './pages/CESDForm.tsx';
import Imports from './pages/Imports';
import CaseDashboard from './pages/CaseDashboard';
import { UsersDataProvider } from './contexts/UsersDataContext';
import Cases from './pages/Cases';
import Profiles from './pages/Profiles';
import { seedLocalStorage } from './data/seedLocalStorage';

const theme = createTheme();

const NavTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Only highlight tabs that are in the nav bar
  const tabPaths = ['/', '/profiles', '/imports'];
  const currentTab = tabPaths.includes(location.pathname) ? location.pathname : false;

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={currentTab} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
          <Tab label="Cases" value="/" />
          <Tab label="Profiles" value="/profiles" />
          <Tab label="Imports" value="/imports" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

const App: React.FC = () => {
  
  useEffect(() => {
      seedLocalStorage();
    }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <UsersDataProvider>
          <CasesDataProvider>
            <NavTabs />
            <Container maxWidth="sm" sx={{ mt: 4 }}>
              <Routes>
                <Route path="/" element={<Cases />} />
                <Route path="/imports" element={<Imports />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/cases/:id" element={<CaseDashboard />} />
                <Route path="/ces-d" element={<CESD />} />
                <Route path="/fatigue" element={<Fatigue />} />
                <Route path="/gaming" element={<Gaming />} />
                <Route path="/mfi" element={<MFI />} />
                <Route path="/stai1" element={<STAI1 />} />
                <Route path="/panas-sf" element={<PANASSF />} />
                <Route path="/questionnaire" element={<Questionnaire />} />
                <Route path="/questionnaire/:id" element={<Questionnaire />}
                />
              </Routes>
            </Container>
          </CasesDataProvider>
        </UsersDataProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
