import React, {MouseEventHandler, useEffect, useState} from 'react';
import {HomeIconWhite, Logo} from "../../../images/images";
import {Link} from "react-router-dom";

import classes from './navbar.module.css'
import Cookies from "js-cookie";
import {useUser} from "../../../hooks/user";


function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const Navbar = () => {
    const [userInfo, setUserInfo] = useUser()
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
        setChanged(false)
    }, [changed]);

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        setChanged(true)
    }, [userInfo.isLogged])


    const logout: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        // Cookies.remove("token")
        // localStorage.removeItem("token")
        setUserInfo({
            username: "",
            login: "",
            id: -1,
            isLogged: false,
            token: ""
        })
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