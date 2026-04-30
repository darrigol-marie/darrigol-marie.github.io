import './PostsList.scss';

import Post from './Post';
import LoadingScreen from './LoadingScreen';
import { usePosts, type UsePostsOptions } from '../hooks/usePosts';
import { PostItem, type PostData } from '../types/post.type';

interface Props<T extends PostData, U extends PostItem> {
	postsHookOptions: UsePostsOptions<T, U>;
	noPostMessage?: string;
	errorMessage?: string;
}

function PostsList<T extends PostData, U extends PostItem>({
	postsHookOptions,
	noPostMessage = 'Aucun élément à afficher.',
	errorMessage = 'Une erreur est survenue lors du chargement.',
}: Props<T, U>) {
	const { data = [], isLoading, isError } = usePosts(postsHookOptions);

	return (
		<LoadingScreen
			isLoading={isLoading}
			isError={isError}
			isEmpty={!isLoading && data.length === 0}
			emptyMessage={noPostMessage}
			errorMessage={errorMessage}
		>
			{data.map((post) => (
				<article key={post.id} className="post">
					<Post post={post} />
				</article>
			))}
		</LoadingScreen>
	);
}

export default PostsList;
