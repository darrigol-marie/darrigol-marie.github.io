interface Props {
	title: string;
	date: string;
	subtitle?: string;
}

function Post({ title, date, subtitle }: Props) {
	return (
		<>
			<h1>{title}</h1>
			<time>{date}</time>
			{subtitle && <p role="doc-subtitle">{subtitle}</p>}
		</>
	);
}

export default Post;
