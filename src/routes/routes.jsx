import PersonalCabinet from '@modules/personal_cabinet/PersonalCabinet';
import Login from '@modules/authorization/Login';
import Registration from '@modules/authorization/Registration';
import Home from '@modules/home/Home';
import Contacts from '@modules/contacts/Contacts';
import Projects from '@modules/projects/Projects';
import Directions from '@modules/directions/DirectionsPage';
import NotFound from '@modules/not_found/NotFound';
import Apply from '@modules/apply/Apply';
import ErrorBoundary from '@modules/error_boundary/ErrorBoundary';

const routes = [
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Registration />
	},
	{
		path: '/profile',
		element: <PersonalCabinet />
	},
	{
		path: '/contacts',
		element: <Contacts />
	},
	{
		path: '/directions',
		element: <Directions />
	},
	{
		path: '/projects',
		element: <Projects />,
	},
	{
		path: '/apply',
		element: <Apply />,
	},

	// WARN: * route goes last
	{
		path: '/*',
		element: <NotFound />
	},
];

export default routes;