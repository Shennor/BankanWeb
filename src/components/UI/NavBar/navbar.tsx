import React, {MouseEventHandler, useEffect, useState} from 'react';
import {HomeIconWhite, Logo} from "../../../images/images";
import {Link} from "react-router-dom";

import classes from './navbar.module.css'
import Cookies from "js-cookie";
import {store, UNSET_USER} from "../../../redux/store";
// import {useUser} from "../../../hooks/user";


function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const Navbar = () => {
    let userInfo = store.getState()
    const unsubscribe = store.subscribe(() => {
        userInfo = store.getState()
    })

    const logout: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        Cookies.remove("token")
        // localStorage.removeItem("token")
        store.dispatch({ type: UNSET_USER })
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
                            {(Cookies.get("token") != undefined) ?
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
                            {(Cookies.get("token") === undefined) ?
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