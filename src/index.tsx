import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import {UserReducers} from "./reducers/userReducers"

import './index.css';
import {HomePage} from "./components/HomePage";
import {LoginPage} from "./components/LoginPage";

export const userStore = createStore(UserReducers)

function BoardPage() {
    return null;
}

ReactDOM.render(
    <Provider store = {userStore}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="signup" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/board/:id" element={<BoardPage />}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
