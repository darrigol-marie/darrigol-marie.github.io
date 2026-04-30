interface Props {
	title: string;
	date: string;
	paragraphs: string[];
	subtitle?: string;
	link?: { source: string; text: string };
}

function Post({ title, date, subtitle, paragraphs, link }: Props) {
	return (
		<>
			<h1>{title}</h1>
			<time>{date}</time>
			{subtitle && <p role="doc-subtitle">{subtitle}</p>}
			{paragraphs.map((paragraph) => (
				<p>{paragraph}</p>
			))}
			{link && <a href={link.source}>{link.text}</a>}
		</>
	);
}

export default Post;
