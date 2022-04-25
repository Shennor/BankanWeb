import React, {FC, MouseEventHandler, useContext, useEffect, useState} from 'react';
import { Logo} from "../../../images/images";
import {Link} from "react-router-dom";

import classes from './navbar.module.css'
import Cookies from "js-cookie";
import {useForceUpdate} from "../../../constants_utils";
import {useUser} from "../../../hooks/user";

interface UserMenuOptionalProps {
    isLogged: boolean
}

const UserMenuOptional: FC<UserMenuOptionalProps> = (props: UserMenuOptionalProps) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!)
    if (props.isLogged) return (
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

interface NavButtonsOptionalProps {
    logout: MouseEventHandler<HTMLButtonElement>
    isLogged: boolean
}

const NavButtonsOptional: FC<NavButtonsOptionalProps> = (props: NavButtonsOptionalProps) => {

    if (!props.isLogged) return (
        <ul className={classes.flexButtonList}>
            <li>
                <button className={classes.navigationBtn}>
                    <Link to='/login'>Login</Link>
                </button>
            </li>
            <li>
                <Link to='/signup'>Sign Up</Link>
            </li>
        </ul>
    )
    return (
        <ul>
            <li>
                <button className={classes.navigationBtn}
                        onClick={props.logout}>
                    <Link to='/login'>Exit</Link>
                </button>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [userInfo, refreshUserInfo] = useUser()

    const logout: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        Cookies.remove("token")
        // localStorage.removeItem("token")
        localStorage.setItem("userInfo", JSON.stringify({
            username: "",
            login: "",
            id: -1,
            isLogged: false
        }))
        refreshUserInfo()
    }

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
                            {(userInfo.isLogged) ?
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
                                </ul>
                                : <ul/>}
                        </div>
                        <div className="header-login">
                            {(!userInfo.isLogged) ?
                                <ul className={classes.flexButtonList}>
                                    <li>
                                        <button className={classes.navigationBtn}>
                                            <Link to='/login'>Login</Link>
                                        </button>
                                    </li>
                                    <li>
                                        <Link to='/signup'>Sign Up</Link>
                                    </li>
                                </ul>
                                :
                                <ul>
                                    <li>
                                        <button className={classes.navigationBtn}
                                                onClick={logout}>
                                            <Link to='/login'>Exit</Link>
                                        </button>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;