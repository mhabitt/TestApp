import {applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import {ApplicationState, storeReducer} from "./store";
import { legacy_createStore as createStore} from 'redux'
export default function configureStore(initialState={}): Store<ApplicationState> {
    return createStore(
        storeReducer,
        initialState,
        applyMiddleware(thunk)
    );
}