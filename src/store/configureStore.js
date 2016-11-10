import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/index';

export function configureStore(initialState) {
    let middlewares = [thunkMiddleware];
    let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    const store = createStoreWithMiddleware(
        RootReducer,
        initialState,
    );
    return store;
}
