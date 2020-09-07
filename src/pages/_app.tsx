import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ApolloProvider } from '@apollo/client';
import GlobalStyles from '@Styles/globalStyles';
import ThemeContext from '@Assets/hooks/ThemeContext';
import LoadContext from '@Assets/hooks/LoadContext';
import Theme from '@Styles/theme';
import client from '../config/apollo';

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(Theme.theme1);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');
    if (!themeLocal) {
      localStorage.setItem('theme', 'theme1');
    }
  });

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoadContext.Provider value={{ load, setLoad }}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component setTheme={setTheme} {...pageProps} />
          </ThemeProvider>
        </LoadContext.Provider>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
};

export default App;
