import { connect } from 'react-redux';
import CartList from '../components/CartList';
import { getItems, getCounter, getTotalPrice, removeFromCart, increment, decrement } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        total: getTotalPrice(state, props),
 		count: getCounter(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increment: (id) => dispatch(increment(id)),
    decrement: (id) => dispatch(decrement(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartList)