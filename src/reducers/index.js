import { combineReducers } from 'redux'
import shoppingCart from './cart'
import products from './products'

const myReducers = combineReducers({
    shoppingCart,
    products
});

export default myReducers