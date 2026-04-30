export interface Post {
	title: string;
	text: string;
}

interface Props {
	posts: Post[];
}

function PostsList({ posts }: Props) {
	return (
		<>
			{posts.length === 0 && <p>Aucun élément à afficher.</p>}
			{posts.map((post) => (
				<article>
					<h2>{post.title}</h2>
					<p>{post.text}</p>
				</article>
			))}
		</>
	);
}

export default PostsList;
