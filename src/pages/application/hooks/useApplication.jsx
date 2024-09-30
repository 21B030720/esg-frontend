import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationService from '@services/ApplicationService';
import ProjectsService from '@services/ProjectsService';
import FileService from '@services/FileService';
import isExist from '@common/utils/isExist';

const useApplication = (applicationId) => {
	const nav = useNavigate();

	const [application, setApplication] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [gettingAppError, setGettingAppError] = useState(null);
	const [postingProjectError, setPostingProjectError] = useState(null);

	const fetchApplication = async () => {
		await ApplicationService.getApplicationById(applicationId)
			.then((app) => setApplication(app))
			.catch((error) => setGettingAppError(error));
	};

	const postProject = async () => {
		if (application == null) return;

		const { id, name, description, direction, projectFile } = application;

		if (!isExist(id, name, description, direction)) {
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
			.then(() => {
				nav('/projects');
			})
			.catch((err) => {
				console.error(err);
				setPostingProjectError(err?.message);
			});
	};

	const downloadFiles = () => {
		const interfaceFiles = application.projectFile;

		FileService.downloadFiles(interfaceFiles).then((downloadedFiles) => {
			downloadedFiles.forEach((file) => {
				const url = URL.createObjectURL(file);
				const a = document.createElement('a');

				a.href = url;
				a.download = file.name;

				document.body.appendChild(a);
				a.click();

				document.body.removeChild(a);
				URL.revokeObjectURL(url); // Release the memory used by the object URL
			});
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
		downloadFiles,
	};
};

export default useApplication;
