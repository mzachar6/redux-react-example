import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ image, name, content, price, currency, onClick }) => {

	return(
		<div className="well well-lg" style={{ backgroundColor:"#FFCD5E", textAlign:"center", marginBottom:"2%"}}>
			<div className="row">
				<div className="col-lg-4 col-md-5 col-sm-6 col-xs-6"><img src={ image } alt="product" style={{width:"150px", height:"200px"}} className="img-responsive" /> </div>
					<div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6" >
						<h3>{ name }</h3>
						<h6>{ content.join(', ') }</h6>
						<h4>{ price } { currency }</h4>
						<button className="btn btn-success" onClick={onClick} style={{marginTop:"5%"}}> Add to Cart </button>	
					</div>
				</div>
			
		</div>				
	);
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string
}

export default Product;