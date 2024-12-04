import React, { useEffect, useState } from 'react';
import LabsList from './components/LabsList';
import LabDetails from './components/LabDetails';
import './Labs.css';
import pic from './Geolog1.png';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import useLaboratories from './hooks/useLaboratories';
import LaboratoriesWithoutPayload from './LabsPageWithoutPayload';



const Laboratories = () => {

	const { data, loading, error } = useLaboratories();

	const [selectedLab, setSelectedLab] = useState(null);

	const handleLabSelect = (lab) => {
		setSelectedLab(lab);
	};

	const handleNextLab = () => {
		const currentIndex = data.findIndex((lab) => lab.id === selectedLab.id);
		const nextIndex = (currentIndex + 1) % data.length;
		setSelectedLab(data[nextIndex]);
	};

	const handlePreviousLab = () => {
		const currentIndex = data.findIndex((lab) => lab.id === selectedLab.id);
		const prevIndex = (currentIndex - 1 + data.length) % data.length;
		setSelectedLab(data[prevIndex]);
	};

	useEffect(() => {
		if (data && data.length > 0) {
		  setSelectedLab(data[0]);
		}
	}, [data]);

	if (loading) {
		return (
			<div>Loading</div>
		)
	}

	if(error) {
		return(
			<LaboratoriesWithoutPayload />
		)
	}

	return (
		<div>
			<Header />
			<div className="labs-page">
				<LabsList labs={data} onSelectLab={handleLabSelect} />
				{selectedLab && (
					<LabDetails
						lab={selectedLab}
						onPreviousLab={handlePreviousLab}
						onNextLab={handleNextLab}
					/>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Laboratories;
