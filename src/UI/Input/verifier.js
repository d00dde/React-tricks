import data from './data';
export default (type, value) => {
	switch(type) {
		case 'password':
				if(data.strongRegex.test(value))
					return 'strongPass';
				if(data.mediumRegex.test(value))
					return 'mediumPass';
				return 'easyPass';
		case 'email':
			return 'TODO';
	}
}