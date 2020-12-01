import React from 'react';
import Logo from './Logo';
import classes from './Header.module.css';

const Header = () => {

    return (
        <div className={classes.Header}>
            <Logo />
        </div>
    )
}

export default Header;