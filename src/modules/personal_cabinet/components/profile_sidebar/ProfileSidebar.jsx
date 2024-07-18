import profile from '../../api/profile.png';
import styles from './profile_sidebar.module.css';

const ProfileSidebar = ({ user }) => {
  return (
    <div className={styles.profileSidebar}>
      <div className={styles.profilePhoto}>
        <img 
          src={profile} 
          alt="Profile" 
          className={styles.profilePicture} 
        />
      </div>

      <div className={styles.cont}>
        <div className={styles.text}>
          <div className={styles.name}>
						<h2>{user.firstName}</h2>

						<h2>{user.lastName}</h2>
					</div>
        </div>

        <div className={styles.text}>
          {
            user.role === 'USER' 
            ? 'Недропользователь' 
            : 'Научный сотрудник'
          }
        </div>
        
        <div className={styles.label}>Email:</div>
        
        <div className={`${styles.text} ${styles.textlabel}`}>
          {user.email}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;