import {combineReducers} from "redux";
import {userReducer} from "./reducers/users/userReducer";
import {LoggedUserApi} from "./reducers/users/types";

export interface ApplicationState{
    user: LoggedUserApi
}

export const storeReducer = combineReducers({
    user: userReducer
});