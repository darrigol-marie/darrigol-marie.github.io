import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import NotFoundPage from '../../src/pages/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';
import { navigateTo } from '../utils/router.helper';

describe('NotFoundPage', () => {
	function renderComponent() {
		render(<NotFoundPage />, { wrapper: BrowserRouter });
	}

	it('should display a title stating "404 error"', () => {
		renderComponent();

		expect(screen.getByRole('heading')).toHaveTextContent('Erreur 404');
	});

	it('should display a text stating what happened', () => {
		renderComponent();

		expect(screen.getByRole('article')).toHaveTextContent(
			/la page.+(n'existe pas|a été déplacée)/i
		);
	});

	it('should display a link to the home page', async () => {
		const user = userEvent.setup();
		navigateTo('/bad-route');

		const returnLink = screen.getByRole('link');
		expect(returnLink).toHaveTextContent(/retour.+accueil/i);

		await user.click(returnLink);
		expect(screen.getByText(/à propos/i));
	});
});
