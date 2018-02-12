import React from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product'

const ProductList = ({products, addToCart }) =>{	
	return(		
		<div className="container">  					 
	     { products.map((product) =>( <Product key={product.id} {...product} onClick = {() =>{  addToCart(product.id)  } } />  ))}
	  	</div>
	);
}

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired
}

export default ProductList;