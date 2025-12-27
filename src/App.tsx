import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import { MobileMenuProvider } from './context/mobileMenuContext';
import { lightTheme, darkTheme, type ThemeType } from './style/theme';

import NavBar from './components/NavBar/navBar';
import GlobalStyles from './style/GlobalStyles';

function App() {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);
  const { t } = useTranslation();

  useEffect(() => {
    toast.success(t('toast_info_message'));
    const savedTheme = localStorage.getItem('appTheme');
    if (savedTheme === 'dark') {
      setTheme(darkTheme);
    } else if (savedTheme === 'light') {
      setTheme(lightTheme);
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(prefersDark ? darkTheme : lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem('appTheme', newTheme === darkTheme ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer theme="colored" />
      <MobileMenuProvider>
        <NavBar
          toggleTheme={toggleTheme}
          currentTheme={theme === lightTheme ? 'light' : 'dark'}
        />
      </MobileMenuProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
