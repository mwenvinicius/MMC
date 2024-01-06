import { combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart:cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
    (JSON.parse(localStorage.getItem('cartItems'))) : ([])

export const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
};

const middleware = [thunk];

const store = configureStore({reducer}, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;