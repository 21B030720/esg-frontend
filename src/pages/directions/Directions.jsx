import { useEffect, useState } from 'react';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import DirectionsList from './components/DirectionsList';
import DirectionDetails from './components/DirectionDetails';
import './Directions.css';
import useDirections from './hooks/useDirections';





const Directions = () => {

	const { data, loading, error } = useDirections();
	

	const [selectedDirection, setSelectedDirection] = useState(null);

	const handleDirectionSelect = (direction) => {
		setSelectedDirection(direction);
	};

	const handleNextDirection = () => {
		const currentIndex = data.findIndex(
			(dir) => dir.id === selectedDirection.id
		);
		const nextIndex = (currentIndex + 1) % data.length;
		setSelectedDirection(data[nextIndex]);
	};

	const handlePreviousDirection = () => {
		const currentIndex = data.findIndex(
			(dir) => dir.id === selectedDirection.id
		);
		const prevIndex =
			(currentIndex - 1 + data.length) % data.length;
		setSelectedDirection(data[prevIndex]);
	};

	useEffect(() => {
		if (data && data.length > 0) {
			setSelectedDirection(data[0]);
		}
	}, [data]);

	if (loading) {
		return (
			<div>Loading</div>
		)
	}

	if(error) {
		return(
			<>{error}</>
		)
	}

	return (
		<div>
			<Header />

			<div className="directions-page">
				<DirectionsList
					directions={data}
					onSelectDirection={handleDirectionSelect}
				/>

				{selectedDirection && (
					<DirectionDetails
						direction={selectedDirection}
						onPreviousDirection={handlePreviousDirection}
						onNextDirection={handleNextDirection}
					/>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default Directions;
