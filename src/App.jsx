import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function App() {
    const [showNavFooter, setShowNavFooter] = useState(false);

    const handleFirstClick = () => {
        setShowNavFooter(true);
    };

    useEffect(() => {
        if (!showNavFooter) {
            window.addEventListener('click', handleFirstClick, { once: true, capture: true });
        }

        return () => {
            window.removeEventListener('click', handleFirstClick, { capture: true });
        };
    }, [showNavFooter]);

    return (
        <BrowserRouter>
            <DynamicTitle />
            <RoutePrefixProvider>
                <ThemeProvider>
                    <GlobalStyle />


                    {showNavFooter && <NavigationBar />}

                    <Routes>
                        <Route path="/" element={<HomePage />} />

                        <Route path="/:profileRoutePrefix/:nickname" element={<Perfil />} />
                        <Route path="/legal/terms" element={<TermsOfServicePage />} />
                        <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
                        <Route path="/about" element={<AboutPage />} />

                        <Route path="/leaderboard/:modo?" element={<Leaderboard />} />
                        <Route path="/links" element={<LinksPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>


                    {showNavFooter && <Footer />}

                </ThemeProvider>
            </RoutePrefixProvider>
        </BrowserRouter>
    );
}

export default App;