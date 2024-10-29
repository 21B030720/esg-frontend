const directionDescriptions = [
	'Business Training provides opportunities for professional growth by teaching business strategies and leadership skills.',
	'Chemical Developments focus on innovative solutions in chemical processes to improve industrial outcomes.',
	'IT/Digitalization is the core of modern technological transformation, enabling businesses to streamline operations and enhance efficiency.',
	'Ecology and ESG aim to promote sustainability by addressing environmental concerns and ensuring responsible corporate governance.',
	'Optimization and Energy Efficiency enhance resource utilization while reducing energy consumption in industrial processes.',
	'Geology and Seismology study the Earth’s structure and seismic activity to predict geological events and explore natural resources.',
	'Hydrogen Energy focuses on the development and implementation of hydrogen as a clean energy source.',
	'Enhanced Oil Recovery involves advanced techniques to increase the amount of crude oil that can be extracted from oil fields.',
	'Industrial Safety emphasizes the importance of risk management and safety protocols in industrial environments.',
	'Technologies and Modeling explore innovative methods to simulate and optimize industrial processes using advanced technologies.',
	'Materials Science investigates the properties and applications of materials, leading to the development of stronger, more efficient substances.',
	'Corrosion Issues deal with the prevention and management of material degradation caused by environmental factors.',
];

const directionImages = [
	'directions_images/business.png',
	'directions_images/chemical.png',
	'directions_images/digital.png',
	'directions_images/ecology.png',
	'directions_images/efficiency.png',
	'directions_images/Geolog1.png',
	'directions_images/water.png',
	'directions_images/oil.png',
	'directions_images/security.png',
	'directions_images/modeling.png',
	'directions_images/material.png',
	'directions_images/corrosion.png',
];

const directionNames = [
	'Business Training',
	'Chemical Developments',
	'IT/Digitalization',
	'Ecology and ESG',
	'Optimization and Energy Efficiency',
	'Geology and Seismology',
	'Hydrogen Energy',
	'Enhanced Oil Recovery',
	'Industrial Safety',
	'Technologies and Modeling',
	'Materials Science',
	'Corrosion Issues',
];

const fakeLabs = directionNames.map((name, index) => ({
	image: directionImages[index],  // Use different image paths for each direction
	description: directionDescriptions[index],  // Unique description
	id: index + 1,
	name,
}));