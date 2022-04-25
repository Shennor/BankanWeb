import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import {useUser} from "./hooks/user";


const Main = () => {

    useUser(true)

    return (
            <App/>
)
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

reportWebVitals();
