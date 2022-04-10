import React, {useContext} from 'react';
import {UserContext} from "../../../context";
import {HomeIconWhite, Logo} from "../../../images/images";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

import classes from './navbar.module.css'

const UserMenuOptional = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    if (userInfo.isLogged) return (
        <ul className={classes.flexMenuList}>
            <li>
                <Link to='/home'>
                    Home
                    {/*<img className="icon" src={HomeIconWhite} alt={"Home"}/>*/}
                </Link>
            </li>
            <li>
                <Link to='/profile'>
                    Profile
                    <img className={classes.profileImg}/>
                    {userInfo.username}
                </Link>
            </li>
        </ul>)
    return (<ul/>)
}

const NavButtonsOptional = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!

    if (!userInfo.isLogged) return (
        <ul className={classes.flexButtonList}>
            <li>
                <button className={classes.navigationBtn}>
                    <Link to='/login'>Login</Link>
                </button>
            </li>
            <li>
                <Link to='/login'>Sign Up</Link>
            </li>
        </ul>
    )
    return (
        <ul>
            <li>
                <button className={classes.navigationBtn}>
                    <Link to='/login'>Exit</Link>
                </button>
            </li>
        </ul>
    )
}


const Navbar = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    return (
        <>
            <nav className={classes.header}>
                <div className="container">
                    <div className={classes.headerRow}>
                        <div className="header-logo">
                            <Link to='/about'>
                                <img className="logo" src={Logo} alt={"Logo"}/>
                            </Link>
                        </div>
                        <div className={classes.navigation}>
                            {UserMenuOptional()}
                        </div>
                        <div className="header-login">
                            {NavButtonsOptional()}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;