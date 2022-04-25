import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";


function Main() {

    return (
        <Provider store={store}>
            <App/>
        </Provider>
)
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

reportWebVitals();
