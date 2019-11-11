import React from 'react';

export default (props) => {
	const classes = ['btn'];
	classes.push(props.type);
	return (
		<button
			className = {classes.join(' ')}
			>
			props.title
		</button>
	);
} 