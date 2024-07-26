import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '@common/contexts/AuthContext';
import { validate } from './util';
import './Auth.css';

const Registration = () => {
	const navigate = useNavigate();

	const { register } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		role: null,
	});

	const [error, setError] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		role: '',
	});

	// const [formattedPhone, setFormattedPhone] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		setError((prev) => ({
			...prev,
			[name]: '',
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validate(formData, setError)) {
			return;
		}

		register(formData)
			.then(() => {
				navigate('/login');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// const handlePhone = (e) => {
	// 	setError((prev) => ({
	// 		...prev,
	// 		phonenumber: '',
	// 	}));

	// 	if (e.key) {
	// 		if (e.key === 'Backspace') {
	// 			const val = e.target.value;

	// 			if (val[val.length - 1] === '-' || val[val.length - 1] === ')') {
	// 				setFormattedPhone(val.substring(0, val.length - 1));
	// 			}
	// 		}

	// 		return;
	// 	}

	// 	const num = '8' + e.target.value.replace(/\D/g, '').substring(1);
	// 	let s = '+7(';

	// 	for (let i = 1; i < num.length; i++) {
	// 		s += num[i];

	// 		if (i === 3) {
	// 			s += ')';
	// 		} else if (i === 6) {
	// 			s += '-';
	// 		}
	// 	}

	// 	setFormData((prev) => ({
	// 		...prev,
	// 		phonenumber: num,
	// 	}));
	// 	setFormattedPhone(s);
	// };

	const onRole = (pickedRole) => {
		if (!['USER', 'WORKER', 'MANAGER'].includes(pickedRole)) {
			throw Error('Role must be USER, WORKER or MANAGER');
		}

		setFormData((p) => ({
			...p,
			role: pickedRole,
		}));
	};

	if (formData.role === null) {
		return (
			<div className="content">
				<div className="wrapper btn_roles">
					<button className="btn-submit" onClick={() => onRole('USER')}>
						Организация
					</button>

					<button className="btn-submit" onClick={() => onRole('WORKER')}>
						Научный сотрудник
					</button>

					<button className="btn-submit" onClick={() => onRole('MANAGER')}>
						Мэнеджер (ВРЕМЕННО)
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="content">
			<div className="wrapper">
				<p className="form-title">Регистрация</p>

				<form className="form" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="firstName">Имя</label>

						{error.firstName && (
							<span className="error-msg">{error.firstName}</span>
						)}

						<input
							id="firstName"
							type="text"
							className="form-field"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label htmlFor="lastName">Фамилия</label>

						{error.lastName && (
							<span className="error-msg">{error.lastName}</span>
						)}

						<input
							id="lastName"
							type="text"
							className="form-field"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label htmlFor="username">Имя Пользователя</label>

						{error.username && (
							<span className="error-msg">{error.username}</span>
						)}

						<input
							id="username"
							type="text"
							className="form-field"
							name="username"
							value={formData.username}
							onChange={handleChange}
						/>
					</div>

					{/* <div>
            <label htmlFor="company">Компания</label>

            { error.company && <span className="error-msg">{error.company}</span> }

            <input 
              id="company" 
              type="text"
              className="form-field" 
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div> */}

					{/* <div>
            <label htmlFor="phone-number">Номер телефона</label>

            { error.phonenumber && <span className="error-msg">{error.phonenumber}</span> }

            <input 
              id="phone-number" 
              type="tel"
              // pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
              maxLength="15"
              placeholder="+7(777)777-7777"
              className="form-field"
              value={formattedPhone}
              onChange={handlePhone}
              onKeyDown={handlePhone}
            />
          </div> */}

					<div>
						<label htmlFor="email">Email</label>

						{error.email && <span className="error-msg">{error.email}</span>}

						<input
							id="email"
							type="text"
							className="form-field"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label htmlFor="password">Пароль</label>

						{error.password && (
							<span className="error-msg">{error.password}</span>
						)}

						<input
							id="password"
							type="password"
							className="form-field"
							name="password"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>

					<Link to="/login" className="link">
						<button className="btn-link" type="button">
							Войти
						</button>
					</Link>

					<button className="btn-submit">Зарегистрироваться</button>
				</form>
			</div>
		</div>
	);
};

export default Registration;
