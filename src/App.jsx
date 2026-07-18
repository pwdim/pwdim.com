import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from "./styles/globalStyles.js";
import NavigationBar from './components/nav/index.jsx';
import { RoutePrefixProvider } from './contexts/RoutePrefixContext.jsx';
import Footer from './components/Footer/index.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import DynamicTitle from './components/DynamicTitle/index.jsx';

import HomePage from './containers/Home/index.jsx';
import TermsOfServicePage from './containers/Legal/Terms/index.jsx';
import PrivacyPolicyPage from './containers/Legal/Privacy/index.jsx';
import NotFoundPage from './containers/NotFoundPage/index.jsx';
import LinksPage from './containers/Links/index.jsx';
import AboutPage from './containers/Sobre/index.jsx';
import ProjectsPage from './containers/Projetos/index.jsx';
import PortfolioPlugins from './containers/Projetos/plugins/index.jsx';
import PortfolioWebsites from './containers/Projetos/websites/index.jsx';
import PortfolioBots from './containers/Projetos/bots/index.jsx';
// import Leaderboard from './containers/Leaderboard/index.jsx';
// import DashboardPage from './containers/Dashboard/index.jsx';
// import UserProfilePage from './containers/UserProfile/index.jsx';
import SmokeBackground from '/src/components/SmokeBackground';

function Layout() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isUserProfilePage = location.pathname.startsWith('/@');

    const shouldHideDefaultLayout = isHomePage || isUserProfilePage;

    useEffect(() => {
        if (isHomePage) {
            document.body.classList.add('is-homepage');
        } else {
            document.body.classList.remove('is-homepage');
        }
        if (isUserProfilePage) {
            document.body.classList.add('profile-page-active');
        } else {
            document.body.classList.remove('profile-page-active');
        }
        return () => {
            document.body.classList.remove('is-homepage');
            document.body.classList.remove('profile-page-active');
        };
    }, [isHomePage, isUserProfilePage]);


    return (
        <>
            <NavigationBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/legal/terms" element={<TermsOfServicePage />} />
                <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/about" element={<AboutPage />} />
                
                <Route path="/portfolio" element={<ProjectsPage />} />  
                <Route path="/links" element={<LinksPage />} />
                <Route path="/portfolio/plugins" element={<PortfolioPlugins />} />
                <Route path="/portfolio/websites" element={<PortfolioWebsites />} />
                <Route path="/portfolio/bots" element={<PortfolioBots />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            {!shouldHideDefaultLayout && <Footer />}

        </>
    );
}


function App() {
    return (
        <BrowserRouter>
            <DynamicTitle />
            <SmokeBackground />
            <RoutePrefixProvider>
                <ThemeProvider>
                    <GlobalStyle />
                    <Layout />
                </ThemeProvider>
            </RoutePrefixProvider>
            
        </BrowserRouter>
    );
}

export default App;