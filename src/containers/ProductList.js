import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import {addToCart, increment, getCounter} from '../reducers/cart';
import { getProducts } from '../reducers/products';


const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props),
        count: getCounter(state, props)   
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    increment: (id) => dispatch(increment(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)