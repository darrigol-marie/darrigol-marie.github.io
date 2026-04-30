import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import { expectPropToBeRenderedForEachComponent } from '../utils/expect.helper';
import { mockupProjects } from '../mocks/data';
import { server } from '../mocks/server';
import { renderComponentWithLoadingAnimation } from '../utils/render.helper';

import ProjectsPage from '../../src/pages/ProjectsPage';

describe('ProjectsPage', () => {
	async function renderComponent(): Promise<void> {
		await renderComponentWithLoadingAnimation(<ProjectsPage />);
	}

	it('should display a message when no project were found', async () => {
		server.use(
			http.get('/projects.json', () => {
				return HttpResponse.json([]);
			}),
		);

		await renderComponent();

		expect(screen.getByText(/aucun projet/i)).toBeInTheDocument();
	});

	it('should render the name of each project as heading', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('name', mockupProjects);
	});

	it('should render a description for each project', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('description', mockupProjects);
	});

	it('should render a date for each project', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('date', mockupProjects);
	});
});
