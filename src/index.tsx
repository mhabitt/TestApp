import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-bootstrap';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FakeApiPage from './pages/FakeApi/FakeApiPage';
import HomePage from './pages/Home/HomePage';
import YoutubePage from './pages/Youtube/YoutubePage';
import LoginPage from "./pages/Security/LoginPage";
import {Provider} from "react-redux";
import configureStore from "./services/configureStore";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = configureStore();

root.render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/" element={<App/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/fake_api" element={<FakeApiPage/>}/>
                        <Route path="/youtube" element={<YoutubePage/>}/>
                        <Route path="*" element={<>Not found</>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
