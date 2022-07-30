import {LoggedUserApi, UserActionTypes} from "./types";

export const authUser = (user: LoggedUserApi) => ({
    type: UserActionTypes.SET,
    payload: user
})

export const logoutUser = () => ({
    type: UserActionTypes.CLEAR
})