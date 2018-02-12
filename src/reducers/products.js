const products = (state = []) => { return state; }

export function getProducts( state,props ) {
	return state.products;
}

export function getProduct( state,props ){
	return state.products.find( (items) => items.id  === props.id );
}

export default products
