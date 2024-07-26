export function validate(form, setError) {
	let valid = true;
	if (form.email !== undefined) {
		if (form.email == '') {
			setError((prev) => ({
				...prev,
				email: 'Введите Email',
			}));
			valid = false;
		} else if (
			!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
		) {
			// NOTE: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
			// NOTE: EMAIL REGEX ^

			setError((prev) => ({
				...prev,
				email: 'Email неверный',
			}));
			valid = false;
		}
	}

	if (form.password !== undefined && form.password == '') {
		setError((prev) => ({
			...prev,
			password: 'Введите пароль',
		}));
		valid = false;
	}

	if (form.firstname !== undefined && form.firstname == '') {
		setError((prev) => ({
			...prev,
			firstname: 'Введите имя',
		}));
		valid = false;
	}

	if (form.lastname !== undefined && form.lastname == '') {
		setError((prev) => ({
			...prev,
			lastname: 'Введите фамилию',
		}));
		valid = false;
	}

	if (form.phonenumber !== undefined && form.phonenumber.length !== 11) {
		setError((prev) => ({
			...prev,
			phonenumber: 'Введите номер',
		}));
		valid = false;
	}

	if (form.company !== undefined && form.company == '') {
		setError((prev) => ({
			...prev,
			company: 'Введите компанию',
		}));
		valid = false;
	}

	if (form.role !== undefined && form.role == '') {
		setError((prev) => ({
			...prev,
			role: 'Выберите роль',
		}));
		valid = false;
	}

	return valid;
}
