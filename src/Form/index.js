import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

class Form extends Component {
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>Sign in</Typography>
                    <Select value='english'>
                        <MenuItem value='french'>French</MenuItem>
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='arabic'>Arabic </MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' name='email' autoFocus></Input>
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' ></Input>
                        </FormControl>
                        <FormControlLabel control={<Checkbox color='primary'/>} label='remember me'/>
                        <Button type='submit' variant='contained' color='primary' fullWidth className={classes.submit}>Sign</Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Form);