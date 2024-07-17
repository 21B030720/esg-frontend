import { useState } from "react";

const useProject = () => { // For Project Details

	const [isOneViewed, setOneViewed] = useState(false);
	const [projectId, setProjectId] = useState('');
	const [project, setProject] = useState({});

	const openProject = (newProjectId) => { // Opening Project Details(One Project). Setting values to isOneViewed, projectId
		setOneViewed(true);

		if(newProjectId != projectId) {
			setProject({});
		}

		setProjectId(newProjectId);
	};

	const closeProject = () => { // Closing Project Details(One Project)
		setOneViewed(false);
	};

	return {
		isOneViewed, openProject,
		projectId, setProjectId,
		closeProject, project,
		setProject,
	};
};

export default useProject