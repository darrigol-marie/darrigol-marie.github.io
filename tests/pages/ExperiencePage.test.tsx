import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import { mockupExperiences } from '../mocks/data';
import { server } from '../mocks/server';
import { expectPropToBeRenderedForEachComponent } from '../utils/expect.helper';
import { renderComponentWithLoadingAnimation } from '../utils/render.helper';

import ExperiencePage from '../../src/pages/ExperiencePage';

describe('ExperiencePage', () => {
	async function renderComponent(): Promise<void> {
		await renderComponentWithLoadingAnimation(<ExperiencePage />);
	}

	it('should display a message when no experience were found', async () => {
		server.use(
			http.get('/experiences.json', () => {
				return HttpResponse.json([]);
			}),
		);

		await renderComponent();

		expect(screen.getByText(/aucune expérience/i)).toBeInTheDocument();
	});

	it('should display the date for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('date', mockupExperiences);
	});

	it('should display the job position for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('position', mockupExperiences);
	});

	it('should display the company name for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('company', mockupExperiences);
	});

	it('should display the description of each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('description', mockupExperiences);
	});
});
