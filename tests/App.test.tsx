import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
	it('should display the main content', () => {
		render(<App pages={[]} />);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('should display a title saying "Accueil"', () => {
		render(<App pages={[]} />);

		expect(screen.getByRole('heading')).toHaveTextContent(/accueil/i);
	});

	it('should display a navigation bar with a link to each page', () => {
		render(<App pages={[{ name: 'Home' }]} />);

		const navigationBar = screen.getByRole('navigation');

		expect(navigationBar.getElementsByTagName('a')).toHaveLength(1);
	});
});
