import {getProduct} from './products'

/************************************************
                actions
/************************************************/
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

/************************************************
                action creators
/************************************************/
export function addToCart(id){
	return{
		type: ADD_TO_CART,
		id,
		count:1
	}
}

export function removeFromCart(id){
	return {
		type: REMOVE_FROM_CART,
		id
	}
}

export function increment(id){
	return{ 
		type:INCREMENT,
		id
	}
}

export function decrement(id){
	return{ 
		type:DECREMENT,
		id	
	}
}
/******************************************
		         reducers
/******************************************/


const shoppingCart = ( state = [], action ) =>{

	switch( action.type ){
		case ADD_TO_CART:
    		let index = state.findIndex(({id}) => id === action.id)
    			if(index === -1){
					return [ ...state, 
							{ 
							 id: action.id,
							 count: action.count	
							} 
						   ];
				}
			return state

		case REMOVE_FROM_CART:
			return [ ...state.filter( ({id}) => id !== action.id )];

		case INCREMENT:
			return state.map( (el) =>{
						if(el.id === action.id){
							return Object.assign({},el, { count: el.count + 1})
						}
						return el
			})

		case DECREMENT:
			return state.map((el) =>{
						if(el.id === action.id){
							if(el.count <= 1){ return el}
								return Object.assign({},el, { count: el.count - 1})
						}
						return el
			})	

		default:
			return state;

	}
}


/****************other functions**********************/ 

// selected products to shopping cart
export function getItems(state,props){ 
	return state.shoppingCart.map( ({id}) => getProduct( state, { id } ) )
}

export function getCounter(state,props){
	return state.shoppingCart.map( (el) => el.count )
}

export function getTotalPrice(state,props){ 
	return state.shoppingCart.reduce((allPrevious,{id, count}) =>{
			const item = getProduct(state,{ id });
			return (allPrevious + item.price * count);
	},0).toFixed(2);
}

export default shoppingCart;