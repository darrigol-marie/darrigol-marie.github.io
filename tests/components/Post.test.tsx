import { render, screen } from '@testing-library/react';

import Post from '../../src/components/Post';
import { PostItem, type PostData } from '../../src/types/post.type';

describe('Post', () => {
	const mockupPostData: PostData = {
		id: 'post-id',
		date: '202X',
		description: ['This is a paragraph'],
	};

	function getMockupPost(postTitle: string = 'Title'): PostItem {
		return new PostItem(mockupPostData, postTitle);
	}

	it('should display a title', () => {
		const postTitle = 'Post Title';
		render(<Post post={getMockupPost(postTitle)} />);

		const titleElement = screen.getByRole('heading');

		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveTextContent(postTitle);
	});

	it('should display a date', () => {
		render(<Post post={getMockupPost()} />);

		const dateElement = screen.getByRole('time');

		expect(dateElement).toBeInTheDocument();
		expect(dateElement).toHaveTextContent(mockupPostData.date);
	});

	it('should display a subtitle if provided', () => {
		const postSubtitle = 'Subtitle';
		const postWithSubtitle: PostItem = getMockupPost();
		postWithSubtitle.setSubtitle(postSubtitle);

		render(<Post post={postWithSubtitle} />);
		const subtitleElement = screen.getByRole('doc-subtitle');

		expect(subtitleElement).toBeInTheDocument();
		expect(subtitleElement).toHaveTextContent(postSubtitle);
	});

	it('should not display a subtitle if not provided', () => {
		render(<Post post={getMockupPost()} />);

		expect(screen.queryByRole('doc-subtitle')).not.toBeInTheDocument();
	});

	it('should display a paragraph if provided', () => {
		render(<Post post={getMockupPost()} />);

		const paragraphElement = screen.getByRole('paragraph');

		expect(paragraphElement).toBeInTheDocument();
		expect(paragraphElement).toHaveTextContent(mockupPostData.description[0]);
	});

	it('should display as many paragraphs as provided', () => {
		const postParagraphs = [
			'First paragraph',
			'Second paragraph',
			'Third paragraph',
		];
		const postWithParagraphs: PostItem = getMockupPost();
		postWithParagraphs.paragraphs = postParagraphs;

		render(<Post post={postWithParagraphs} />);
		const paragraphsElements = screen.getAllByRole('paragraph');

		expect(paragraphsElements).toHaveLength(postParagraphs.length);
	});

	it('should display a link if provided', () => {
		const linkSource = 'www.toto.com';
		const linkText = 'This is a link';
		const postLink = { source: linkSource, text: linkText };
		const postWithLink: PostItem = getMockupPost();
		postWithLink.setLink(postLink);

		render(<Post post={postWithLink} />);
		const linkElement = screen.getByRole('link');

		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', linkSource);
		expect(linkElement).toHaveTextContent(linkText);
	});

	it('should not display a link if not provided', () => {
		render(<Post post={getMockupPost()} />);

		expect(screen.queryByRole('link')).not.toBeInTheDocument();
	});
});
