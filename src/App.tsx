import React, {useEffect} from 'react';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import './App.css';
import {Layout} from './components/Layout';
import FakeApiPage from './pages/FakeApi/FakeApiPage';
import HomePage from './pages/Home/HomePage';
import YoutubePage from './pages/Youtube/YoutubePage';
import {useAuth} from "./services/auth";
import FakeApiPostsPage from "./pages/FakeApi/pages/Posts/FakeApiPostsPage";
import FakeApiUsersPage from "./pages/FakeApi/pages/Users/FakeApiUsersPage";
import LoginPage from "./pages/Security/LoginPage";

function App() {
    return (
       <div className={"app"} data-testid={"app-container"}>
           <BrowserRouter>
               <Routes>
                   <Route path="/login" element={<LoginPage/>}/>
                   <Route path="/" element={<Layout/>}>
                       <Route index element={<HomePage/>}/>
                       <Route path="fake_api" element={<FakeApiPage/>}>
                           <Route path="posts" element={<FakeApiPostsPage/>}/>
                           <Route path="users" element={<FakeApiUsersPage/>}/>
                       </Route>
                       <Route path="/youtube" element={<YoutubePage/>}/>
                       <Route path="*" element={<>Not found</>}/>
                   </Route>
               </Routes>
           </BrowserRouter>
       </div>
    );
}

export default App;
