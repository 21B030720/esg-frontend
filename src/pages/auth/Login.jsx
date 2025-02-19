import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '@common/contexts/AuthContext';
import { validate } from './util';
import './Auth.css';
import Header from '@modules/header/Header';
import { useMediaQuery } from 'react-responsive';
import Footer from '@modules/footer/Footer';
import { useTranslation } from 'react-i18next';

const Login = () => {
	const nav = useNavigate();

	const isMobile = useMediaQuery({ maxWidth: 480 });

	const { t } = useTranslation();

	const { login } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const [error, setError] = useState({
		username: '',
		password: '',
	});

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

		if (!validate(formData, null, setError, true)) {
			return;
		}

		login(formData)
			.then(() => {
				nav('/');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className="content">
			{isMobile && <Header />}

			<div className="wrapper">
				<p className="form-title">Личный кабинет</p>

				<form className="form" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">{t("User name")}</label>

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

					<Link to="/register" className="link">
						<button className="btn-link" type="button">
							Зарегистрироваться
						</button>
					</Link>

					<button className="btn-submit" type="submit">
						Войти
					</button>
				</form>
			</div>

			{isMobile && <Footer />}
		</div>
	);
};

export default Login;
