// Registration.jsx
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import AuthContext from '@common/contexts/AuthContext';
import { validate } from './util';
import { formConfig } from './formConfig'; // Import the configuration
import './Auth.css';

const Registration = () => {
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ maxWidth: 480 });
	const { register } = useContext(AuthContext);
	const [role, setRole] = useState(null);

	const [formData, setFormData] = useState({});
	const [error, setError] = useState({});
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

		if (!validate(formData, formattedPhone, setError)) {
			console.error('Invalid registration form data');
		}

		const sending = { ...formData, role: role };

		register(sending)
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
			phoneNumber: '',
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

		setRole(pickedRole);

		const initialFormData = Object.keys(formConfig[pickedRole]).reduce(
			(acc, key) => {
				acc[key] = '';
				return acc;
			},
			{}
		);

		setFormData(initialFormData);
	};

	if (formData.email === undefined) {
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

	const currentConfig = formConfig[role];

	return (
		<div className="content">
			{formConfig[role] !== undefined ? (
				<div className="wrapper">
					{isMobile && <Header />}
					<p className="form-title">Регистрация</p>

					<form className="form">
						{Object.keys(currentConfig).map((key) => {
							// Skip rendering phoneNumber as it's handled separately
							if (key === 'phoneNumber') {
								return (
									<div key={key}>
										<label htmlFor={key}>{currentConfig[key].label}</label>

										{error[key] && (
											<span className="error-msg">{error[key]}</span>
										)}

										<input
											id={key}
											type={currentConfig[key].type}
											pattern={currentConfig[key].pattern}
											maxLength={currentConfig[key].maxLength}
											placeholder={currentConfig[key].placeholder}
											className={`form-field ${
												currentConfig[key].type === 'password' && !isMobile
													? ''
													: ''
											}`}
											name={key}
											value={formattedPhone}
											onChange={handlePhone}
											onKeyDown={handlePhone}
										/>
									</div>
								);
							}

							return (
								<div key={key}>
									<label htmlFor={key}>{currentConfig[key].label}</label>

									{error[key] && (
										<span className="error-msg">{error[key]}</span>
									)}

									<input
										id={key}
										type={currentConfig[key].type}
										placeholder={currentConfig[key].placeholder}
										className={
											currentConfig[key].type === 'password' && isMobile
												? 'form-field-last'
												: 'form-field'
										}
										name={key}
										value={formData[key]}
										onChange={handleChange}
									/>
								</div>
							);
						})}

						{/* <Link to="/login" className="link">
				<button className="btn-link" type="button">
				  Войти
				</button>
			  </Link> */}

						<button onClick={handleSubmit} className="btn-submit" type="submit">
							Зарегистрироваться
						</button>
					</form>
				</div>
			) : null}

			{isMobile && <Footer />}
		</div>
	);
};

export default Registration;
