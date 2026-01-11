import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from "react-router-dom";

import { ThemeProviderContext, useTheme } from './context/themeContext';
import { MobileMenuProvider } from './context/mobileMenuContext';

import PublicPage from "./pages/PublicPage/publicPage";
import DashboardPage from "./pages/DashboardPage/publicPage";
import DashboardLoginPage from "./pages/DashboardPageLogin/publicPage";


import GlobalStyles from './style/GlobalStyles';

const AppContent = () => {
  const { themeObject } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    toast.success(t('toast_info_message'));
  }, []);

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyles />
      <ToastContainer theme="colored" />
      <MobileMenuProvider>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/login" element={<DashboardLoginPage />} />
          {/* qualquer rota desconhecida volta pra home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileMenuProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeProviderContext>
      <AppContent />
    </ThemeProviderContext>
  );
}

export default App;
