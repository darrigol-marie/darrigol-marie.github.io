import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';

export function renderComponentWithLoadingAnimation(
	component: React.ReactNode,
): Promise<void> {
	render(component, {
		wrapper: ({ children }) => {
			return (
				<QueryClientProvider client={new QueryClient()}>
					{children}
				</QueryClientProvider>
			);
		},
	});

	return waitForElementToBeRemoved(() => screen.getByTitle(/animation/i));
}
