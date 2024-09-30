export function validate(form, phone, setError, isLogin) {
	let valid = true;

	if (form.username === '') {
		setError((prev) => ({
			...prev,
			username: 'Введите фамилию',
		}));
		valid = false;
	}

	if (form.password === '') {
		setError((prev) => ({
			...prev,
			password: 'Введите пароль',
		}));
		valid = false;
	}

	// lazy approach, do not want to create anything else
	// if login form, then username and password only must be validated
	if (isLogin) return valid;

	if (form.email === '') {
		setError((prev) => ({
			...prev,
			email: 'Введите Email',
		}));
		valid = false;
	} else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
		// NOTE: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		// NOTE: EMAIL REGEX ^

		setError((prev) => ({
			...prev,
			email: 'Email неверный',
		}));
		valid = false;
	}

	if (form.firstName === '') {
		setError((prev) => ({
			...prev,
			firstName: 'Введите имя',
		}));
		valid = false;
	}

	if (form.lastName === '') {
		setError((prev) => ({
			...prev,
			lastName: 'Введите фамилию',
		}));
		valid = false;
	}

	if (phone != null && phone.length <= 11) {
		setError((prev) => ({
			...prev,
			phoneNumber: 'Введите правильный номер',
		}));
		valid = false;
	}

	if (form.role === 'USER') {
		if (form.bin === '') {
			setError((prev) => ({
				...prev,
				bin: 'Введите БИН',
			}));
			valid = false;
		}

		if (form.companyName === '') {
			setError((prev) => ({
				...prev,
				companyName: 'Введите компанию',
			}));
			valid = false;
		}
	} else if (form.role === 'WORKER') {
		if (form.iin === '') {
			setError((prev) => ({
				...prev,
				iin: 'Введите ИИН',
			}));
			valid = false;
		}
	}

	return valid;
}
