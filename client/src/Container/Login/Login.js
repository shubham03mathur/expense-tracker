import React from 'react';
import styles from './Login.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({}));
const Login = () =>  {
    const classes = useStyles();
    const appliedClasses = [classes.root, styles.main];
    return (
        <div className={appliedClasses.join(' ')}>
            <div className={styles.HeaderContainer}>
                <h1 className={styles.Header}>Expense Tracker</h1>
            </div>
            <div className={styles.childContainer}>
                <p className={styles.Description}>Hi, There! How do you want to continue?</p>
                <div className={styles.btnHolder}>
                    <div className={styles.BtnLogin}>
                        <Button variant="contained" color="primary" className={styles.LoginBtn}>
                            Login
                        </Button>
                    </div>
                    <div className={styles.BtnLocal}>
                        <Button variant="contained" color="secondary" className={styles.LoginBtn}>
                            Guest
                        </Button>
                    </div>
                </div>
                <div className="seprator"></div>
            </div>
        </div>
    )
}

export default Login;
