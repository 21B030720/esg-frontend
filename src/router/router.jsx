import { createBrowserRouter } from 'react-router-dom';
import Application from '@pages/application/Application';
import Apply from '@pages/apply/Apply';
import Login from '@pages/auth/Login';
import Registration from '@pages/auth/Registration';
import Contacts from '@pages/contacts/Contacts';
import Directions from '@pages/directions/Directions';
import Home from '@pages/home/Home';
import Laboratories from '@pages/laboratories/LabsPage';
import NotFound from '@pages/not_found/NotFound';
import PersonalCabinet from '@pages/personal_cabinet/PersonalCabinet';
import Project from '@pages/project/Project';
import Projects from '@pages/projects/Projects';
import ErrorBoundary from '@modules/error_boundary/ErrorBoundary';
import ProtectedRoute from '@common/components/protected_route/ProtectedRoute';

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
		path: '/applications/:id',
		element: (
			<ProtectedRoute>
				<Application />
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

const router = createBrowserRouter(routes);

export default router;
