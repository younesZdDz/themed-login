import React, {  useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


function Page (props){
        const {isDarkMode} = useContext(ThemeContext);
        const styles = {
            backgroundColor: isDarkMode ? 'black' : 'white',
            width: '100vw',
            height: '100vh'
        };
        return (
            <div style={styles}>
                {props.children}
            </div>
        );
    
}

export default Page;