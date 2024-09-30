import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '@common/contexts/AuthContext';
import { validate } from './util';
import './Auth.css';
import Header from '@modules/header/Header';
import { useMediaQuery } from 'react-responsive';
import Footer from '@modules/footer/Footer';

const Registration = () => {
	const navigate = useNavigate();

	const isMobile = useMediaQuery({ maxWidth: 480 });

	const { register } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		role: null,
		bin: '',
		iin: '',
		companyName: '',
	});

	const [error, setError] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		role: '',
		bin: '',
		iin: '',
		companyName: '',
	});

	const [formattedPhone, setFormattedPhone] = useState('');

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

		if (!validate(formData, formattedPhone, setError)) return;

		register(formData)
			.then(() => {
				navigate('/login');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const handlePhone = (e) => {
		setError((prev) => ({
			...prev,
			phonenumber: '',
		}));

		if (e.key) {
			if (e.key === 'Backspace') {
				const val = e.target.value;

				if (val[val.length - 1] === '-' || val[val.length - 1] === ')') {
					setFormattedPhone(val.substring(0, val.length - 1));
				}
			}

			return;
		}

		const num = '8' + e.target.value.replace(/\D/g, '').substring(1);
		let s = '+7(';

		for (let i = 1; i < num.length; i++) {
			s += num[i];

			if (i === 3) {
				s += ')';
			} else if (i === 6) {
				s += '-';
			}
		}

		setFormData((prev) => ({
			...prev,
			phoneNumber: num,
		}));
		setFormattedPhone(s);
	};

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
				{isMobile && <Header />}

				<div className="wrapper btn_roles">
					<button className="btn-submit" onClick={() => onRole('USER')}>
						Организация
					</button>

					<button className="btn-submit" onClick={() => onRole('WORKER')}>
						Научный сотрудник
					</button>

					<button className="btn-submit" onClick={() => onRole('MANAGER')}>
						Менеджер
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
					{formData.role === 'USER' ? (
						<>
							<div>
								<label htmlFor="firstName">БИН</label>

								{error.bin && <span className="error-msg">{error.bin}</span>}

								<input
									id="bin"
									type="text"
									className="form-field"
									name="bin"
									value={formData.bin}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label htmlFor="firstName">Компания</label>

								{error.companyName && (
									<span className="error-msg">{error.companyName}</span>
								)}

								<input
									id="companyName"
									type="text"
									className="form-field"
									name="companyName"
									value={formData.companyName}
									onChange={handleChange}
								/>
							</div>
						</>
					) : (
						<div>
							<label htmlFor="firstName">ИИН</label>

							{error.iin && <span className="error-msg">{error.iin}</span>}

							<input
								id="iin"
								type="text"
								className="form-field"
								name="iin"
								value={formData.iin}
								onChange={handleChange}
							/>
						</div>
					)}

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
						<label htmlFor="username">Имя пользователя</label>

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

					<div>
						<label htmlFor="phone-number">Телефон</label>

						{error.phoneNumber && (
							<span className="error-msg">{error.phoneNumber}</span>
						)}

						<input
							id="phone-number"
							type="tel"
							pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
							maxLength="15"
							placeholder="+7(777)777-7777"
							className="form-field"
							value={formattedPhone}
							onChange={handlePhone}
							onKeyDown={handlePhone}
						/>
					</div>

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

						{isMobile ? (
							<>
								<input
									id="password"
									type="password"
									className="form-field-last"
									name="password"
									value={formData.password}
									onChange={handleChange}
								/>
							</>
						) : (
							<>
								<input
									id="password"
									type="password"
									className="form-field"
									name="password"
									value={formData.password}
									onChange={handleChange}
								/>
							</>
						)}
					</div>

					<Link to="/login" className="link">
						<button className="btn-link" type="button">
							Войти
						</button>
					</Link>

					<button className="btn-submit">Зарегистрироваться</button>
				</form>
			</div>

			{isMobile ? (
				<>
					<Footer />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default Registration;
