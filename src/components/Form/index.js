import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import styles from './styles';
import { LanguageContext } from '../../contexts/language.context';

const languages = {
	english: {
		signIn: 'Sign in',
		email: 'Email',
		password: 'Password',
		rememberMe: 'remember me'
	},
	french: {
		signIn: 'Connecter',
		email: 'Adresse électronique',
		password: 'Mot de passe',
		rememberMe: 'se rappeler de moi'
	},
	arabic: {
		signIn: 'تسجيل الدخول',
		email: 'عنوان البريد الإلكتروني',
		password: 'كلمه السر',
		rememberMe: 'تذكرنى'
	}
};

function Form(props) {
	const { classes } = props;
	const { language, changeLanguage } = useContext(LanguageContext);
	const { signIn, email, password, rememberMe } = languages[language];
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{signIn}</Typography>
				<Select value={language} onChange={changeLanguage}>
					<MenuItem value="french">French</MenuItem>
					<MenuItem value="english">English</MenuItem>
					<MenuItem value="arabic">Arabic </MenuItem>
				</Select>
				<form
					className={classes.form}
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">{email}</InputLabel>
						<Input id="email" name="email" autoFocus></Input>
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">{password}</InputLabel>
						<Input id="password" name="password"></Input>
					</FormControl>
					<FormControlLabel
						control={<Checkbox color="primary" />}
						label={rememberMe}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						className={classes.submit}
					>
						{signIn}
					</Button>
				</form>
			</Paper>
		</main>
	);
}
Form.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Form);
