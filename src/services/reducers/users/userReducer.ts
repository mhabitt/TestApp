import {Reducer} from "redux";
import {LoggedUserApi, UserActionTypes} from "./types";

const initialState: LoggedUserApi = {

}

export const userReducer: Reducer<LoggedUserApi> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SET: {
            return {...state, ...action.payload}
        }
        case UserActionTypes.CLEAR: {
            return {...initialState}
        }
        default: {
            return state
        }
    }
}