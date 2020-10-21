import React, { useContext } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from './styles';
import { ThemeContext } from '../../contexts/theme.context';
import { LanguageContext } from '../../contexts/language.context';
const content = {
    english: {
        search: "Search",
        flag: "🇬🇧"
    },
    french: {
        search: "Chercher",
        flag: "🇫🇷"
    },
    arabic: {
        search: "ابحث",
        flag: "🇩🇿"
    }
  };

function NavBar (props){
        const { classes } = props;
        const { language } = useContext(LanguageContext);
        const {isDarkMode, toggleTheme} = useContext(ThemeContext);
        const { search, flag } = content[language];    
        return(
            <div className={classes.root}>
                <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
                    <Toolbar> 
                        <IconButton className={classes.menuButton} color='inherit '>
                        <span role='img' aria-label='french flag'>{flag}</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'>Login with context</Typography>
                        <Switch onChange={toggleTheme} />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder={`${search}...`}  classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput 
                            }}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    
}

export default withStyles(styles)(NavBar);