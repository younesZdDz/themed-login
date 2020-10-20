import React from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Page from './components/Page';
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <Page>
        <NavBar />
        <Form />
      </Page>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
