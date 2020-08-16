import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '@Styles/globalStyles';
import UserContext from '@Assets/hooks/UserContext';
import { theme1 } from '@Styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(theme1);
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ theme, setTheme }}>
        <GlobalStyles />
        <Component setTheme={setTheme} {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
