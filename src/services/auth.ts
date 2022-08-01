import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./reducers/users/selectors";
import {LoginFormApi} from "../pages/Security/types/types";
import {LoggedUserApi} from "./reducers/users/types";
import {delay, generateUUID} from "./core";
import {authUser, logoutUser} from "./reducers/users/actions";
import {mockUnprocessableEntity} from "./api/mock";

export const useAuth = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const tokenPrefix = process.env.REACT_APP_TOKEN;
    const localStorage = window.localStorage
    const login = async (data: LoginFormApi) => {
        await delay(200);
        if (!data.login) {
            return Promise.reject(mockUnprocessableEntity([{
                code: "must_be_not_null",
                message: "must_be_not_null"
            }]))
        }
        const user: LoggedUserApi = {
            email: `${data.login}@gmail.com`,
            name: data.login
        }
        dispatch(authUser(user));
        tokenPrefix && localStorage.setItem(tokenPrefix, generateUUID());
    }

    const getToken = () => {
        return tokenPrefix ? localStorage.getItem(tokenPrefix) : undefined
    }

    const isAuthenticated = () => {
        return user.name
    }

    const logout = () => {
        logoutUser();
        tokenPrefix && localStorage.removeItem(tokenPrefix);
    }

    const checkLogin = () => {

    }

    return {login, logout, checkLogin, isAuthenticated, getToken}
}