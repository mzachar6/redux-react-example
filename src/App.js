import React from 'react';
import CartList from './containers/CartList';
import ProductList from './containers/ProductList';

const App = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center", marginBottom:"3%"}}>
                    <h1><i>React+Redux Example</i></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                    <ProductList />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-5 col-xs-3">
                    <CartList />
                </div>
            </div>
        </div>
    );
}

export default App;