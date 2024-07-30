import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '@common/contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
	const redirect = useNavigate();
	const { isAuthenticated } = useContext(AuthContext);

	useEffect(() => {
		if (!isAuthenticated) {
			redirect('/register');
		}
	}, [isAuthenticated]);

	return <>{children}</>;
};

export default ProtectedRoute;
