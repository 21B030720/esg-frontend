import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '@routes/routes';
import { useTranslation } from 'react-i18next';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import kk from 'date-fns/locale/kk';
import enGB from 'date-fns/locale/en-GB';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
	const { i18n } = useTranslation();

	registerLocale('ru', ru);
	registerLocale('en', enGB);
	registerLocale('kk', kk);

	setDefaultLocale(i18n.language);

	const router = createBrowserRouter(routes);

	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
};

export default App;
