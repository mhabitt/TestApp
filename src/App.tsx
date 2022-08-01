import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import {Layout} from './components/Layout';
import FakeApiPage from './pages/FakeApi/FakeApiPage';
import HomePage from './pages/Home/HomePage';
import YoutubePage from './pages/Youtube/YoutubePage';
import {useAuth} from "./services/auth";
import FakeApiPostsPage from "./pages/FakeApi/pages/Posts/FakeApiPostsPage";

function App() {
    const auth = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated()){
            navigate("/login", {replace: true})
        }
    }, []);


    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="fake_api" element={<FakeApiPage/>}>
                    <Route path="posts" element={<FakeApiPostsPage/>}/>
                </Route>
                <Route path="youtube" element={<YoutubePage/>}/>
                <Route path="*" element={<>Not found</>}/>
            </Route>
        </Routes>
    );
}

export default App;
