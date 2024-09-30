import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@common/components/select/Select';
import Clickaway from '@common/components/clickaway/Clickaway';
import ProjectsContext from '@pages/projects/contexts/ProjectsContext';
import useToggle from '@common/hooks/useToggle';
import useDirections from '@common/hooks/useDirections';
import magnifierIcon from '@assets/icons/magnifier.svg';
import caretDown from '@assets/icons/caret_down.svg';
import styles from './projects_config.module.css';

const ProjectsConfig = () => {
	const { t } = useTranslation();

	const {
		inputFilters,
		onInputStatusFilterChange,
		onInputSearchNameChange,
		onInputDirectionChange,
		applyFiltersAndSearchName,
	} = useContext(ProjectsContext);

	const { directions, isLoading: areDirsLoading } = useDirections();

	const { value: areDirsVisible, setValue: setDirsVisible } = useToggle(false);

	const selectStyle = {
		borderBottomLeftRadius: areDirsVisible ? '0' : '',
		borderBottomRightRadius: areDirsVisible ? '0' : '',
	};
	const caretStyle = {
		transform: areDirsVisible && 'rotate(180deg)',
		transition: 'all 0.3s ease',
	};

	const onClickAway = (e) => {
		const targetId = e.target.id;
		const valid = [
			'projects_config_dirs',
			'projects_config_dirs_icon',
			'projects_config_dirs_ph',
		];

		if (areDirsVisible && !valid.includes(targetId)) {
			setDirsVisible(false);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.searchbar}>
				<img
					src={magnifierIcon}
					alt="magnifier"
					className={styles.magnifier_icon}
				/>

				<input
					type="text"
					value={inputFilters.searchName}
					placeholder={t('Search by name')}
					className={styles.searchbar_input}
					onChange={(e) => onInputSearchNameChange(e.target.value)}
				/>
			</div>

			<p className={styles.label}>{t('Request direction')}:</p>

			<div className={styles.dirs}>
				<div
					id="projects_config_dirs"
					className={styles.dirs_select}
					style={selectStyle}
					onClick={() => setDirsVisible(true)}
				>
					<p id="projects_config_dirs_ph" className={styles.dirs_placeholder}>
						{inputFilters.direction ? inputFilters.direction : t('Choose')}
					</p>

					<img
						id="projects_config_dirs_icon"
						src={caretDown}
						alt="caret pointing downwards"
						className={styles.caret_down}
						style={caretStyle}
					/>
				</div>

				{areDirsVisible &&
					(areDirsLoading ? (
						<p>Загрузка...</p>
					) : (
						<Clickaway onClickAway={onClickAway}>
							{directions.length > 0 ? (
								<div className={styles.dirs_wrappable}>
									{directions.map((d, i) => (
										<p
											key={d.id == null ? i : d.id}
											className={styles.dir}
											onClick={() => onInputDirectionChange(d.name)}
										>
											{d.name}
										</p>
									))}
								</div>
							) : (
								<div className={styles.dirs_wrappable}>
									<p className={styles.dirs_placeholder}>
										{t('Directions not found')}
									</p>
								</div>
							)}
						</Clickaway>
					))}
			</div>

			<p className={styles.label}>{t('Application status')}:</p>

			<div className={styles.radios}>
				<div
					className={styles.radio_box}
					onClick={() => onInputStatusFilterChange('ACCEPTED')}
				>
					<Select isSelected={inputFilters.status === 'ACCEPTED'} />

					<p className={styles.radio_label}>{t('Status_accepted')}</p>
				</div>

				<div
					className={styles.radio_box}
					onClick={() => onInputStatusFilterChange('IN_PROGRESS')}
				>
					<Select isSelected={inputFilters.status === 'IN_PROGRESS'} />

					<p className={styles.radio_label}>{t('Status_progress')}</p>
				</div>

				<div
					className={styles.radio_box}
					onClick={() => onInputStatusFilterChange('REJECTED')}
				>
					<Select isSelected={inputFilters.status === 'REJECTED'} />

					<p className={styles.radio_label}>{t('Status_rejected')}</p>
				</div>
			</div>

			<button className={styles.button} onClick={applyFiltersAndSearchName}>
				{t('Apply filter')}
			</button>
		</div>
	);
};

export default ProjectsConfig;
