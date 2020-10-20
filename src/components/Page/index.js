import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


class Page extends Component {
    static contextType = ThemeContext;
    render() {
        const styles = {
            backgroundColor: this.context.isDarkMode ? 'black' : 'white',
            width: '100vw',
            height: '100vh'
        };
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export default Page;