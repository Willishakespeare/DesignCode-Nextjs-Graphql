import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '@Styles/globalStyles';
import ThemeContext from '@Assets/hooks/ThemeContext';
import LoadContext from '@Assets/hooks/LoadContext';
import Theme from '@Styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(Theme.theme1);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');
    if (!themeLocal) {
      localStorage.setItem('theme', 'theme1');
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LoadContext.Provider value={{ load, setLoad }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component setTheme={setTheme} {...pageProps} />
        </ThemeProvider>
      </LoadContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
