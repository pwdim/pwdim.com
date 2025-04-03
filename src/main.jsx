import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './containers/Home/index.jsx';
import Perfil from './containers/Perfil/index.jsx';
import GlobalStyle from "./styles/globalStyles";
import NavigationBar from './components/nav';
import { RoutePrefixProvider } from './contexts/RoutePrefixContext';
import Footer from './components/Footer';
import TermsOfServicePage from './containers/Legal/Terms';
import PrivacyPolicyPage from './containers/Legal/Privacy';
import NotFoundPage from './containers/NotFoundPage/index.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import LinksPage from './containers/Links/index.jsx';
import DynamicTitle from './components/DynamicTitle'; 
import AboutPage from './containers/Sobre/index.jsx';
import HomePage from './containers/Home/index.jsx';
import Leaderboard from './containers/Leaderboard/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DynamicTitle /> 
      <RoutePrefixProvider>
        <ThemeProvider> 
          <GlobalStyle />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:profileRoutePrefix/:nickname" element={<Perfil />} />
            <Route path="/legal/terms" element={<TermsOfServicePage />} />
            <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/leaderboard/:modo" element={<Leaderboard />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </RoutePrefixProvider>
    </BrowserRouter>
  </React.StrictMode>,
);