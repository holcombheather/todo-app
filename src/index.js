import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SettingsProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';
import AuthProvider from './Context/Auth';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>

);
