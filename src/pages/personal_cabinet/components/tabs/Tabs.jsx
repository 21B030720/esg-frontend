import { useEffect, useState } from 'react';
import MyProjects from '../my_projects/MyProjects';
import Settings from '../settings/Settings';
import Applications from '../applications/Applications';
import MyApplications from '../my_requests/MyApplications';
import ApplicationService from '@services/ApplicationService';
import styles from './tabs.module.css';

const Tabs = ({ user }) => {
	const [activeTab, setActiveTab] = useState(null);
	const [items, setItems] = useState([]);
	const [isLoading, setLoading] = useState(false);

	function getInitialActiveTab() {
		switch (user.role) {
			case 'USER':
				return 'my_applications';
			case 'WORKER':
				return 'projects';
			case 'MANAGER':
				return 'applications';
		}
	}

	useEffect(() => {
		setActiveTab(getInitialActiveTab());
	}, [user.role]);

	useEffect(() => {
		if (activeTab == null || activeTab === 'settings') {
			return;
		}

		setLoading(true);

		switch (activeTab) {
			case 'my_applications':
				ApplicationService.getMyApplications()
					.then((myApplications) => {
						setItems(myApplications);
					})
					.finally(() => setLoading(false));
				break;
			case 'applications':
				ApplicationService.getApplications()
					.then((applications) => {
						setItems(applications);
					})
					.finally(() => setLoading(false));
				break;
		}
	}, [activeTab]);

	return (
		<div className={styles.tabs}>
			<div className={styles.tabButtons}>
				{user.role === 'MANAGER' ? (
					<button
						className={`${styles.tabButton} ${
							activeTab === 'applications' ? styles.active : ''
						}`}
						onClick={() => setActiveTab('applications')}
					>
						Заявки
					</button>
				) : (
					<>
						<button
							className={`${styles.tabButton} ${
								activeTab === 'my_applications' ? styles.active : ''
							}`}
							onClick={() => setActiveTab('my_applications')}
						>
							Мои заявки
						</button>

						{user.role === 'WORKER' && (
							<button
								className={`${styles.tabButton} ${
									activeTab === 'projects' ? styles.active : ''
								}`}
								onClick={() => setActiveTab('projects')}
							>
								Мои проекты
							</button>
						)}
					</>
				)}

				<button
					className={`${styles.tabButton} ${
						activeTab === 'settings' ? styles.active : ''
					}`}
					onClick={() => setActiveTab('settings')}
				>
					Настройки
				</button>
			</div>

			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className={styles.tabContent}>
					{activeTab === 'my_applications' && (
						<MyApplications applications={items} />
					)}

					{activeTab === 'projects' && user.role !== 'USER' && <MyProjects />}

					{activeTab === 'applications' && user.role === 'MANAGER' && (
						<Applications applications={items} />
					)}

					{activeTab === 'settings' && <Settings user={user} />}
				</div>
			)}
		</div>
	);
};

export default Tabs;
