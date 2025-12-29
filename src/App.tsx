import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import { ThemeProviderContext, useTheme } from './context/themeContext';
import { MobileMenuProvider } from './context/mobileMenuContext';

import NavBar from './components/NavBar/navBar';
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
        <NavBar />
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
