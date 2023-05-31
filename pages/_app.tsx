import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';

const emotionCache = createEmotionCache();

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
