import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import {allReducers} from "./reducers/allReducers"

import './index.css';
import {HomePage} from "./components/HomePage";

export const store = createStore(allReducers)

ReactDOM.render(
    <Provider store = {store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="signup" element={<RegistrationPage/>}/>
                    <Route path="/login">
                        // TODO
                    </Route>
                    <Route path="/home" element={<HomePage/>}/>
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
