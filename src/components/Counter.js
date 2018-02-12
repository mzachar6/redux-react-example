import React from 'react';
const mybtn = { padding: "1% 2%" };

const Counter = ({onClick, sign}) =>{
	return( 
		<button style={mybtn} className="btn btn-info btn-xs" onClick={onClick}> {sign} </button>
	)
}

export default Counter