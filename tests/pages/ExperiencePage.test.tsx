import { render, screen } from '@testing-library/react';

import ExperiencePage from '../../src/pages/ExperiencePage';

describe('ExperiencePage', () => {
	it('should display a list of my experiences', () => {
		render(<ExperiencePage />);

		expect(screen.getAllByRole('article')).not.toHaveLength(0);
	});
});
