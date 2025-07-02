import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
	it('should display Vite + React as a title', () => {
		render(<App />);

		const heading = screen.getByRole('heading');

		expect(heading).toHaveTextContent(/vite \+ react/i);
	});
});
