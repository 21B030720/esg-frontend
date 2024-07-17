import doExist from "@common/utils/doExist";
import projects from "@modules/projects/utils/projects";
import getProjectsList from "./getProjectsList";

// WARN: current logic is mock-data dependant
const getProjects = async (page, pageSize, maxProjectsCount) => {
	try{
		const { data } = await getProjectsList();
		console.log(data);
	} catch(error) {
		console.error(error);
	}

	return new Promise((res, rej) => {
		try {
			if(!doExist(page, pageSize)) {
				res([]);
			}
			
			const pageInt = parseInt(page);
			const pageSizeInt = parseInt(pageSize);
		
			if(pageInt < 1 || pageSizeInt < 1) {
				res([]);
			}
		
			if(pageInt * pageSizeInt > maxProjectsCount) {
				setTimeout(() => res(projects), 500)
			} else {
				const start = (pageInt - 1) * pageSizeInt;
			
				setTimeout(() => res(projects.slice(start, start + pageSizeInt)), 1500);
			}
		} catch(e) {
			rej(e);
		}
	})
};

export default getProjects;