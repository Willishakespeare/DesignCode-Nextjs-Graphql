import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '@Styles/globalStyles';
import ThemeContext from '@Assets/hooks/ThemeContext';
import Theme from '@Styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(Theme.theme1);
  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');
    if (themeLocal) {
      import(`@Styles/themes/${themeLocal}`).then((module) => {
        setTheme(module.default);
      });
    } else {
      localStorage.setItem('theme', 'theme1');
      setTheme(Theme.theme1);
    }
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component setTheme={setTheme} {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
