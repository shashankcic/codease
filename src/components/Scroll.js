import React from 'react';

const Scroll = (props) => {
	return( 
		<div className="shadow-5 br3 ma2 bw2">
			{props.children}
		</div>	
	);
}

export default Scroll;