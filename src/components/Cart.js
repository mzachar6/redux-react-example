import PropTypes from 'prop-types';
import React from 'react';
import Counter from './Counter';

const mybtn = { padding: "1% 2%" };

const Cart = ({name, counter, price, currency, removeOnClick, incOnClick, decOnClick}) =>{

	return(
		<div style={{margin:"5% 2%"}}>				
			<div> 
				<Counter onClick={incOnClick} sign={"+"} /> 
			</div>						
				<span><b>{counter} x {name}</b> ( {price} {currency} )</span>
				<button style={mybtn} className="btn btn-danger btn-xs" onClick={removeOnClick}>X</button>
			<div> 
				<Counter onClick={decOnClick} sign={"-"} /> 
			</div>			
		</div>	

	);
}

Cart.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
	removeOnClick: PropTypes.func.isRequired,
	incOnClick: PropTypes.func.isRequired,
	decOnClick: PropTypes.func.isRequired
}

export default Cart;