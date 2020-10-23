import React from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Page from './components/Page';
import { ThemeProvider } from './contexts/theme.context';
import { LanguageProvider } from './contexts/language.context';

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
