import React, {useEffect} from 'react'
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import {Nav, NavItem} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectUser} from "../services/reducers/users/selectors";
import {useAuth} from "../services/useAuth";

export const Layout = () => {
    const user = useSelector(selectUser);
    const auth = useAuth();
    const navigate = useNavigate();
    const logoutUser = async () => {
        await auth.logout();
        navigate("/login")
    }

    useEffect(() => {
        if (!auth.checkLogin()) {
            navigate("/login", {replace: true})
        }
    }, [auth, navigate]);

    return (
        <>
            <div className="sidebar">
                <Nav>
                    <NavItem>
                        <NavLink to="/" end>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="fake_api">Api</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="youtube">Youtube</NavLink>
                    </NavItem>

                </Nav>
                <div className={"nav-footer"} onClick={() => logoutUser()}>
                    Zalogowany jako {user.name}
                </div>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </>
    )
}
