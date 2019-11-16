export default { 
	strongRegex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\\$%\\^&\\*])(?=.{8,})"),
	mediumRegex: new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"),
	emailRegex: new RegExp("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"),
	messages: {
		strongPass: 'Password strong',
		mediumPass: 'Password medium',
		easyPass: 'Password easy',
		emptyPass: 'Password must not be blank',
		noValidEmail: 'This is not a valid e-mail'
	}
}