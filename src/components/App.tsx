import React from 'react';
import {
    Outlet,
    Link,
} from "react-router-dom";

// context API instead of redux

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
                    <Link to="/login">Forced Log In</Link>
                </li>
            </ul>
            </nav>
            <Outlet />
        </div>
    );
}