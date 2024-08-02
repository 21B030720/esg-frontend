import PersonalCabinet from '@modules/personal_cabinet/PersonalCabinet';
import Login from '@modules/authorization/Login';
import Registration from '@modules/authorization/Registration';
import Home from '@modules/home/Home';
import Contacts from '@modules/contacts/Contacts';
import Projects from '@modules/projects/Projects';
import Laboratories from '@modules/laboratoria/LabsPage';
import Directions from '@modules/directions/DirectionsPage';
import NotFound from '@modules/not_found/NotFound';
import Apply from '@modules/apply/Apply';
import ErrorBoundary from '@modules/error_boundary/ErrorBoundary';
import ProtectedRoute from '@common/components/protected_route/ProtectedRoute';
import Project from '@modules/project/Project';

const routes = [
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Registration />,
	},
	{
		path: '/profile',
		element: (
			<ProtectedRoute>
				<PersonalCabinet />
			</ProtectedRoute>
		),
	},
	{
		path: '/contacts',
		element: <Contacts />,
	},
	{
		path: '/directions',
		element: <Directions />,
	},
	{
		path: '/projects/:id',
		element: (
			<ProtectedRoute>
				<Project />
			</ProtectedRoute>
		),
	},
	{
		path: '/projects',
		element: (
			<ProtectedRoute>
				<Projects />
			</ProtectedRoute>
		),
	},
	{
		path: '/apply',
		element: (
			<ProtectedRoute>
				<Apply />
			</ProtectedRoute>
		),
	},
	{
		path: '/labs',
		element: <Laboratories />,
	},

	// WARN: * route goes last
	{
		path: '/*',
		element: <NotFound />,
	},
];

export default routes;
