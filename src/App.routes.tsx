import type { RouteObject } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';

export type AppRoute = RouteObject & {
	path: string;
	name: string;
};

export const appRoutes: AppRoute[] = [
	{
		path: '/',
		element: <AboutPage />,
		name: 'À propos',
	},
	{
		path: '/experience',
		element: <ExperiencePage />,
		name: 'Expérience',
	},
];
