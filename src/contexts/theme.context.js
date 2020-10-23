import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useToggle from '../hooks/useToggle';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
	const [isDarkMode, toggleTheme] = useToggle(false);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

ThemeProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};
