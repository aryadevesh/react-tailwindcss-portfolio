import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [selectedProjectId, setSelectedProjectId] = useState(
		null
	);

	return (
		<SingleProjectContext.Provider
			value={{ selectedProjectId, setSelectedProjectId }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
