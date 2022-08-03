import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-bootstrap';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import configureStore from "./services/configureStore";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = configureStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
