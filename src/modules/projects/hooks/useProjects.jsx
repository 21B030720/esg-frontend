import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getProjectsCount from "@common/api/getProjectsCount";
import getProjects from "@common/api/getProjects";

const useProjects = () => { // Settings of Projects List. Returns Projects List

	const [searchParams] = useSearchParams();
	const [projects, setProjects] = useState([]);
	const [projectsCount, setProjectsCount] = useState();

	const page = searchParams.get('page'); // Param #1
	const pageSize = searchParams.get('page_size'); // Param #2

	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		setLoading(true);

		const p = new Promise(res => {
			const projectsCnt = getProjectsCount();
			projectsCnt.then(res);
		})
		.then(projectsCnt => {
			setProjectsCount(projectsCnt);

			return getProjects(page, pageSize, projectsCnt); // Get Projects List
		})
		.then(projects => {
			setProjects(projects);
		})
		.catch(e => {
			console.error(e);
		})
		.finally(() => {
			setLoading(false);
		});

		return () => {
			setLoading(false);
		};
	}, [page, pageSize, searchParams]);

	const stopRequest = () => {
		
	};

	return {
		projects, setProjects,
		projectsCount,
		isLoading, setLoading,
		stopRequest,
	};
};

export default useProjects;