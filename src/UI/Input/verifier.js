import data from './data';
export default (type, value) => {
	switch(type) {
		case 'password':
				if(data.strongRegex.test(value))
					return 'strongPass';
				if(data.mediumRegex.test(value))
					return 'mediumPass';
				if(value === '')
					return 'emptyPass';
				return 'easyPass';
		case 'email':
			if(data.emailRegex.test(value))
				return true;
			return false;
		default:
			return false
	}
}