import { useEffect, useState } from 'react';
import MyRequests from '../my_requests/MyRequests';
import MyProjects from '../my_projects/MyProjects';
import Settings from '../settings/Settings';
import Applications from '../applications/Applications';
import styles from './tabs.module.css';
import getMyApplications from '@common/api/getMyApplications';

const Tabs = ({ user }) => {
  const [activeTab, setActiveTab] = useState('requests');
	const [items, setItems] = useState([]);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if(activeTab === 'settings') {
			return;
		}

		setLoading(true);

		switch(activeTab) {
			case 'requests':
				getMyApplications()
					.then(res => {
						setItems(res.data);
					})
					.finally(() => setLoading(false));

				break;
		}
	}, [activeTab]);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabButtons}>
				{
					user.role === 'MANAGER' 
					?
						<button
							className={`${styles.tabButton} ${activeTab === 'applications' ? styles.active : ''}`}
							onClick={() => setActiveTab('applications')}
						>
							Заявки
						</button>
					:
					<>
						<button
							className={`${styles.tabButton} ${activeTab === 'requests' ? styles.active : ''}`}
							onClick={() => setActiveTab('requests')}
						>
							Мои заявки
						</button>

						{
							user.role === 'WORKER' && 
								<button
									className={`${styles.tabButton} ${activeTab === 'projects' ? styles.active : ''}`}
									onClick={() => setActiveTab('projects')}
								>
									Мои проекты
								</button>
						}
					</>
				}

        <button
          className={`${styles.tabButton} ${activeTab === 'settings' ? styles.active : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Настройки
        </button>
      </div>

      {
				isLoading
				?
					<p>Loading...</p>
				:
					<div className={styles.tabContent}>
						{activeTab === 'requests' && <MyRequests requests={items} />}

						{activeTab === 'projects' && user.role !== 'USER' && <MyProjects />}

						{activeTab === 'applications' && user.role === 'MANAGER' && <Applications />}

						{activeTab === 'settings' && <Settings user={user} />}
					</div>
			}
    </div>
  );
};

export default Tabs;