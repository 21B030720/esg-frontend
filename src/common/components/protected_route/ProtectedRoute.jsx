import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '@common/contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
	const redirect = useNavigate();
	const { isAuthenticated, isFirstRefreshOver } = useContext(AuthContext);

	useEffect(() => {
		if (isFirstRefreshOver && !isAuthenticated) {
			redirect('/login');
		}
	}, [isAuthenticated, isFirstRefreshOver]);

	return <>{children}</>;
};

export default ProtectedRoute;
