import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import myReducers from './reducers';
import PIZZAS from './data/pizzaListData';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


let store = createStore(
    myReducers,
    { products: PIZZAS }, // initial store values
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

