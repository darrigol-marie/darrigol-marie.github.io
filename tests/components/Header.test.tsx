import { render, screen } from '@testing-library/react';

import Header from '../../src/components/Header';

describe('Header', () => {
	it('should display the given title as a heading', () => {
		const title = 'Given title';
		render(<Header title={title} />);

		const heading = screen.getByRole('heading');

		expect(heading).toHaveTextContent(title);
	});
});
