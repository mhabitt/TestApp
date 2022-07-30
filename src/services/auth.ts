import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./reducers/users/selectors";
import {LoginFormApi} from "../pages/Security/types/types";
import {LoggedUserApi, UserActionTypes} from "./reducers/users/types";
import {delay} from "./core";

export const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const login = async (data: LoginFormApi) => {
        await delay(200);
        const user: LoggedUserApi = {
            email: `${data.login}@gmail.com`,
            name: data.login
        }
        dispatch({
            type: UserActionTypes.SET,
            payload: user
        })
    }

    const isAuthenticated = () => {
        return user.name
    }

    const logout = () => {
        dispatch({
            type: UserActionTypes.CLEAR
        })
    }

    const checkLogin = () => {

    }

    return {login, logout, checkLogin, isAuthenticated}
}