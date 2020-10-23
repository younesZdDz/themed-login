import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const LanguageContext = createContext();

export function LanguageProvider(props) {
	const [language, setLanguage] = useState('english');
	const changeLanguage = (e) => {
		setLanguage(e.target.value);
	};
	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
}

export const withLanguageContext = (Component) => (props) => (
	<LanguageContext.Consumer>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		{(value) => <Component languageContext={value} {...props} />}
	</LanguageContext.Consumer>
);

LanguageProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};
