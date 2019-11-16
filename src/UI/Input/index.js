import React, {useState} from 'react';
import data from './data';
import verifier from './verifier';
import './Input.css';
import showIcon from './show.png';
import hideIcon from './hide.png';


export default (props) => {
	const [id] = useState('input' + Math.random());
	const [type] = useState(props.type || 'text');
	
	const [value, setValue] = useState('');
	
	const [tipMessage, setTipMessage] = useState('');
	
	const [classes, setClasses] = useState({label: [], input: []});

	const [isShowPass, setIsSowPass] = useState(false);
	
	function changeHandler(value) {
		setValue(value.trim());
		if(!props.verify)
			return;
		if (type === 'password')
			setTipMessage(data.messages[verifier(type, value)]);
		if (type === 'email'){
			if(!verifier(type, value))
				setTipMessage(data.messages.noValidEmail);
			else setTipMessage('');
		}
	}

	function focusHandler () {
		if(classes.input.includes('input-focus'))
			return;
		const {label, input} = classes;
		setClasses({label: [...label, 'label-focus'],
								input: [...input, 'input-focus']});
	}

	function blurHandler () {
		if (value !== '')
			return;
		setTipMessage('');
		setClasses({label: classes.label.filter((className) => className !== 'label-focus'),
								input: classes.input.filter((className) => className !== 'input-focus')});
	}

	return (

		<div className='mtrlz-input'>
			<input id={id} 
						 type={type === 'password' ? (isShowPass ? 'text' : 'password') : type}
						 className={classes.input.join(' ')}
						 onChange={(e) => changeHandler(e.target.value)}
						 onFocus={focusHandler}
						 onBlur={blurHandler}
						 value={value}/>
			<label htmlFor={id} className={classes.label.join(' ')}>{props.label}</label>
			{props.type === 'password' && <div className='show-btn'
																				 onClick={() => setIsSowPass(!isShowPass)}
																			>
																				<img src={isShowPass ? hideIcon:showIcon} 
																						 alt='hide pass' />
																		</div>}
			<div className='tooltip'>{tipMessage}</div>
		</div>
	);
}