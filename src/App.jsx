import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './containers/Home/index.jsx';
import Perfil from './containers/Perfil/index.jsx';
import GlobalStyle from "./styles/globalStyles.js";
import NavigationBar from './components/nav/index.jsx';
import { RoutePrefixProvider } from './contexts/RoutePrefixContext.jsx';
import Footer from './components/Footer/index.jsx';
import TermsOfServicePage from './containers/Legal/Terms/index.jsx';
import PrivacyPolicyPage from './containers/Legal/Privacy/index.jsx';
import NotFoundPage from './containers/NotFoundPage/index.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import LinksPage from './containers/Links/index.jsx';
import DynamicTitle from './components/DynamicTitle/index.jsx';
import AboutPage from './containers/Sobre/index.jsx';
import Leaderboard from './containers/Leaderboard/index.jsx';
import ProtectedRoute from './components/ProtectRoute/index.jsx';
import DashboardPage from './containers/Dashboard/index.jsx';
import UserProfilePage from './containers/UserProfile/index.jsx';
import LoginCallbackPage from './containers/Auth/LoginCallback/index.jsx';


function Layout() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            {!isHomePage && <NavigationBar />}
            <Routes>
                
                <Route path="/" element={<HomePage />} />
                <Route path="/perfil/:nick" element={<Perfil />} />
                <Route path="/@:username" element={<UserProfilePage />} />
                <Route path="/login/callback" element={<LoginCallbackPage />} />
                {/* <Route path="/login/error" element={<LoginErrorPage />} /> */}
                <Route path="/legal/terms" element={<TermsOfServicePage />} />
                <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/leaderboard/:modo?" element={<Leaderboard />} />
                <Route path="/links" element={<LinksPage />} />

                
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    
                </Route>

                
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {!isHomePage && <Footer />}
        </>
    );
}


function App() {
    return (
        <BrowserRouter>
            <DynamicTitle />
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