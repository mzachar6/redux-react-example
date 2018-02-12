import React from 'react'
import PropTypes from 'prop-types';
import Cart from './Cart';

const CartList = ({ items, count, total, removeFromCart, increment, decrement}) => {
    return(
        <div>
                        
                <div className="panel panel-default" style={{ border:"0.15em solid black",backgroundColor:"#FFCD5E"}}>
                  <div className="panel-heading " style={{textAlign:"center"}}><h4>Preliminary Cart</h4></div>
                    <div className="panel-body">
                        { items.length > 0 && (
                            <div>                            
                                { items.map( (item,index) =>(
                                  	<Cart key={item.name} counter={ count[index] } {...item} removeOnClick={ () => removeFromCart(item.id) } 
                                      decOnClick ={ () => decrement(item.id) } incOnClick ={ () => increment(item.id) } 
                                     />
                                ))}                             
                                <b>Total: {total} EUR</b> 
                            </div>
                        )}
                        { items.length === 0 && (
                            <div className="alert alert-info">No pizza added</div>
                        )
                    	}
                                               
                    </div>                    
                </div>
                <div style={{textAlign:"center", margin:"5% auto"}}><button className="btn btn-info" onClick ={ ()=> window.location.reload()}> Proceed to payment </button></div>
            </div>        
    );
}

CartList.propTypes = {
	items: PropTypes.array,
	count: PropTypes.array,	
	removeFromCart: PropTypes.func.isRequired,
	increment:PropTypes.func.isRequired,
	decrement:PropTypes.func.isRequired
}

export default CartList;