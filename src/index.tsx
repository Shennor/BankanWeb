import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';


function Main() {
    return (<App/>)
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

reportWebVitals();
