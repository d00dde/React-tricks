export default { 
	strongRegex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"),
	mediumRegex: new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"),
	messages: {
		strongPass: 'Password strong',
		mediumPass: 'Password medium',
		easyPass: 'Password easy'
	}
}