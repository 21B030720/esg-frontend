import { useEffect, useState } from 'react';
import ApplicationService from '@services/ApplicationService';
import ProjectsService from '@services/ProjectsService';
import doExist from '@common/utils/doExist';

const useApplication = (applicationId) => {
	const [application, setApplication] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [gettingAppError, setGettingAppError] = useState(null);
	const [postingProjectError, setPostingProjectError] = useState(null);

	const fetchApplication = async () => {
		await ApplicationService.getApplicationById(applicationId)
			.then((app) => setApplication(app))
			.catch((error) => setGettingAppError(error));
	};

	const postProject = async (onSuccess) => {
		if (application == null) return;

		const { id, name, description, direction, projectFile } = application;

		if (!doExist(id, name, description, direction)) {
			setPostingProjectError('Некоторая информация о заявке отсутствует');
			return;
		}

		const form = {
			applicationID: id,
			name,
			description,
			directionID: direction.id,
		};

		await ProjectsService.postProject(form, projectFile)
			.then((response) => {
				if (onSuccess === 'function') onSuccess(response);
			})
			.catch((err) => {
				console.error(err);
				setPostingProjectError(err?.message);
			});
	};

	useEffect(() => {
		setLoading(true);
		setGettingAppError(null);

		fetchApplication().finally(() => setLoading(false));
	}, []);

	return {
		application,
		isLoading,
		gettingAppError,
		postingProjectError,
		postProject,
	};
};

export default useApplication;
