import React, {useState, useEffect} from 'react';
import data from './data';
import verifier from './verifier';
import './Input.css';

export default (props) => {
	const [id] = useState('input' + Math.random());
	const [type] = useState(props.type || 'text');
	
	const [value, setValue] = useState('');
	
	const [tipMessage, setTipMessage] = useState();
	const [labelClasses, setLabelClasses] = useState([]);
	
	function changeHandler(value) {
		setValue(value.trim());
		if(!props.verify)
			return;
		if (type === 'password')
			setTipMessage(data.messages[verifier(type, value)]);
	}

	function focusHandler () {
		setLabelClasses([...labelClasses, 'focus']);
	}

	function blurHandler () {
		if (value !== '')
			return;
		setLabelClasses(labelClasses.filter((className) => className != 'focus'));
	}

	return (

		<div className='mtrlz-input'>
			<input id={id} 
						 type={type}
						 onChange={(e) => changeHandler(e.target.value)}
						 onFocus={focusHandler}
						 onBlur={blurHandler}
						 value={value}/>
			<label htmlFor={id} className={labelClasses.join(' ')}>{props.label}</label>
			{props.type === 'password' || <img className='show-btn'>Show</img>}
			<div className='tooltip'>{tipMessage}</div>
		</div>
	);
}