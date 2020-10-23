import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/theme.context';

function Page(props) {
	const { isDarkMode } = useContext(ThemeContext);
	const styles = {
		backgroundColor: isDarkMode ? 'black' : 'white',
		width: '100vw',
		height: '100vh'
	};
	return <div style={styles}>{props.children}</div>;
}

Page.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default Page;
