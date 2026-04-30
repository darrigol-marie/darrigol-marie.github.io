import type { RouteObject } from 'react-router-dom';

import AboutPage from './pages/AboutPage';

export const appRoutes: RouteObject[] = [
	{
		path: '/',
		element: <AboutPage />,
	},
];
