import { screen, within } from '@testing-library/react';

import { mockupPosts } from '../mocks/data';

import PostsList from '../../src/components/PostsList';
import type { UsePostsOptions } from '../../src/hooks/usePosts';
import { PostItem, type PostData } from '../../src/types/post.type';
import { renderComponentWithLoadingAnimation } from '../utils/render.helper';

type ElementValue<T> = T extends undefined ? null : HTMLElement;

type ElementProps = {
	[Key in keyof PostItem as Key extends 'id' | 'setSubtitle' | 'setLink'
		? never
		: Key]: Key extends 'paragraphs'
		? ElementValue<PostItem[Key]>[]
		: ElementValue<PostItem[Key]>;
};

interface Props {
	loadingMessage: HTMLElement | null;
	noPostMessage: HTMLElement | null;
	postsElements: ElementProps[];
}

describe('PostsList', () => {
	const mockupHookOptions: UsePostsOptions<PostData, PostItem> = {
		queryKey: ['posts'],
		url: '/posts.json',
		dataMapper: (item) => new PostItem(item, 'Post Title'),
	};

	async function renderComponent(): Promise<Props> {
		await renderComponentWithLoadingAnimation(
			<PostsList postsHookOptions={mockupHookOptions} />,
		);

		const postsElements: ElementProps[] = screen
			.queryAllByRole('article')
			.map((postElement) => {
				const context = within(postElement);

				return {
					title: context.getByRole('heading'),
					paragraphs: context.getAllByRole('paragraph'),
					date: context.getByRole('time'),
					subtitle: context.queryByRole('doc-subtitle'),
				};
			});

		return {
			loadingMessage: screen.queryByText(/chargement/i),
			noPostMessage: screen.queryByText(/aucun élément/i),
			postsElements,
		};
	}

	it('should display a list of posts', async () => {
		const component = await renderComponent();

		expect(component.postsElements).toHaveLength(mockupPosts.length);
		expect(component.noPostMessage).not.toBeInTheDocument();
	});
});
