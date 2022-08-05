import {applyMiddleware, legacy_createStore as createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {ApplicationState, storeReducer} from "./store";

export default function configureStore(initialState={}): Store<ApplicationState> {
    return createStore(
        storeReducer,
        initialState,
        applyMiddleware(thunk)
    );
}