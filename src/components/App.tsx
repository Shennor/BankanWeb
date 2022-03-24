import React from 'react';
import {
    Outlet,
    Link,
} from "react-router-dom";


export default function App() {
    return (
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
            </ul>
            </nav>
            <Outlet />
        </div>
    );
}