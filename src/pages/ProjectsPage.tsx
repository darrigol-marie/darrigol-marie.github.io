import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import PostsList from '../components/PostsList';

export interface Project {
	id: string;
	date: string;
	name: string;
	description: string;
}

function ProjectsPage() {
	const { data = [], isLoading } = useQuery({
		queryKey: ['projects'],
		queryFn: () => axios.get('/projects.json').then((response) => response.data),
	});

	return (
		<PostsList
			isLoading={isLoading}
			posts={data.map((project: Project) => {
				return {
					id: project.id,
					date: project.date,
					title: project.name,
					text: project.description,
				};
			})}
		/>
	);
}

export default ProjectsPage;
