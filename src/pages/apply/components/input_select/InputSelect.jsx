import { useState } from 'react';
import RequirementStar from '@common/components/requirement_star/RequirementStar';
import Clickaway from '@common/components/clickaway/Clickaway';
import useToggle from '@common/hooks/useToggle';
import useDirections from '@common/hooks/useDirections';
import caretDown from '@assets/icons/caret_down.svg';
import isExist from '@common/utils/isExist';
import styles from './input_select.module.css';

const ApplyInputSelect = ({ label, isRequired = false, name, onChange }) => {
	const { directions, isLoading: areDirsLoading } = useDirections();

	const { value: areDirsVisible, setValue: setDirsVisible } = useToggle(false);

	const [pickedDir, setPickedDir] = useState('');

	if (!isExist(name, onChange, label)) {
		return;
	}

	const onOpening = (e) => {
		const targetId = e.target.id;
		const valid = [
			'apply_select_box',
			'apply_select_ph_box',
			'apply_select_ph',
			'apply_select_caret',
		];

		if (!areDirsVisible && valid.includes(targetId)) {
			setDirsVisible(true);
		}
	};

	const onPicking = (dir) => {
		setPickedDir(dir);
		onChange(dir);
		setDirsVisible(false);
	};

	const onClickAway = (e) => {
		const targetId = e.target.id;
		const valid = [
			'apply_select_box',
			'apply_select_ph_box',
			'apply_select_ph',
			'apply_select_caret',
		];

		if (areDirsVisible && !valid.includes(targetId)) {
			setDirsVisible(false);
		}
	};

	const caretStyle = {
		transform: areDirsVisible && 'rotate(180deg)',
		transition: 'all 0.3s ease',
	};

	return (
		<div className={styles.container}>
			<div className={styles.label_box}>
				<p className={styles.label}>{label}</p>

				{isRequired && <RequirementStar />}
			</div>

			<div
				id="apply_select_box"
				className={styles.select_box}
				onClick={onOpening}
			>
				<div id="apply_select_ph_box" className={styles.select_ph_box}>
					<p id="apply_select_ph" className={styles.select_ph}>
						{pickedDir.name || 'Выберите'}
					</p>

					<img
						id="apply_select_caret"
						src={caretDown}
						alt="caret"
						className={styles.caret}
						style={caretStyle}
					/>
				</div>

				{areDirsVisible ? (
					areDirsLoading ? (
						<p>Loading...</p>
					) : (
						<Clickaway onClickAway={onClickAway}>
							<div className={styles.dirs_wrappable}>
								{directions.length > 0 ? (
									directions.map((d, i) => (
										<p
											key={d.id == null ? i : d.id}
											className={styles.dir}
											onClick={() => onPicking(d)}
										>
											{d.name}
										</p>
									))
								) : (
									<p>Направления не найдены</p>
								)}
							</div>
						</Clickaway>
					)
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default ApplyInputSelect;
