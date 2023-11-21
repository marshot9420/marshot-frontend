import React from 'react';
import CreateDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import App from '@/App';

import { GlobalStyles, theme } from '@/styles';

const root = document.getElementById('root');
const queryClient = new QueryClient();

if (!root) throw new Error('root를 찾을 수 없습니다.');

const appRoot = CreateDOM.createRoot(root);

appRoot.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>,
);
