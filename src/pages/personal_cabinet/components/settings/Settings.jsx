import { useState } from 'react';
import UserService from '@services/UserService';
import resetIcon from '@assets/icons/reset.png';
import saveIcon from '@assets/icons/save.png';
import styles from './settings.module.css';

const Settings = ({ user }) => {
	const [formData, setFormData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		phone: user.phone,
		bin: user.role === 'ordinary' ? user.bin : '',
		company: user.role === 'ordinary' ? user.company : '',
		iin: user.role === 'researcher' ? user.iin : '',
	});

	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError(null);
	};

	const handleSubmit = () => {
		UserService.updateUser(formData)
			.then(() => {
				window.location.reload();
			})
			.catch((err) => {
				console.error(err);
				setError(err?.message);
			});
	};

	const handleReset = () => {
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			bin: '',
			company: '',
			iin: '',
			password: '',
		});
	};

	return (
		<div className={styles.settings}>
			<div className={styles.form}>
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="Имя"
					className={styles.input}
				/>

				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Фамилия"
					className={styles.input}
				/>

				{/* {user.role !== 'researcher' && (
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Email"
						className={styles.input}
					/>
				)} */}

				<input
					type="text"
					name={user.role === 'researcher' ? 'iin' : 'bin'}
					value={user.role === 'researcher' ? formData.iin : formData.bin}
					onChange={handleChange}
					placeholder={user.role === 'researcher' ? 'ИИН' : 'БИН'}
					className={styles.input}
				/>

				{user.role !== 'researcher' && (
					<input
						type="text"
						name="company"
						value={formData.company}
						onChange={handleChange}
						placeholder="Компания"
						className={styles.input}
					/>
				)}

				<input
					type="text"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="Номер телефона"
					className={styles.input}
				/>

				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					placeholder="Пароль"
					className={styles.input}
				/>
			</div>

			{error && <p className={styles.error}>{error}</p>}

			<div className={styles.buttons}>
				<button onClick={handleReset} className={styles.button}>
					<img src={resetIcon} alt="Date" className={styles.icon} />
					Сбросить
				</button>

				<button onClick={handleSubmit} className={styles.button}>
					<img src={saveIcon} alt="Date" className={styles.icon} />
					Сохранить
				</button>
			</div>
		</div>
	);
};

export default Settings;
