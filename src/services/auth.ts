import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./reducers/users/selectors";
import {LoginFormApi} from "../pages/Security/types/types";
import {LoggedUserApi} from "./reducers/users/types";
import {authUser, logoutUser} from "./reducers/users/actions";
import {mockUnprocessableEntity} from "./api/mock";
import accessTokenService from "./accessTokenService";

export const useAuth = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const tokenPrefix = process.env.REACT_APP_TOKEN;
    const localStorage = window.localStorage
    const login = async (data: LoginFormApi) => {
        if (!data.login) {
            return Promise.reject(mockUnprocessableEntity([{
                code: "must_be_not_null",
                message: "must_be_not_null"
            }]))
        }
        const user: LoggedUserApi = {
            email: `${data.login}@gmail.com`,
            name: data.login,
            role: data.login === "admin" ? "ADMIN" : "USER"
        }
        dispatch(authUser(user));
        accessTokenService.update()
    }

    const getToken = () => {
        return tokenPrefix ? localStorage.getItem(tokenPrefix) : undefined
    }

    const logout = () => {
        logoutUser();
        accessTokenService.remove();
    }

    const checkLogin = () => {
        return true;
    }

    return {login, logout, checkLogin, getToken}
}