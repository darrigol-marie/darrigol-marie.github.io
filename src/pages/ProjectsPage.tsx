import PostsList from '../components/PostsList';
import { type UsePostsOptions } from '../hooks/usePosts';
import type { PostLink } from '../types/post.type';
import { ProjectPost, type ProjectData } from '../types/project.type';

export interface Project {
	id: string;
	date: string;
	name: string;
	description: string[];
	link?: PostLink;
}

function ProjectsPage() {
	const projectsHookOptions: UsePostsOptions<ProjectData, ProjectPost> = {
		queryKey: ['projects'],
		url: '/projects.json',
		dataMapper: (item) => new ProjectPost(item),
	};

	return (
		<PostsList
			postsHookOptions={projectsHookOptions}
			noPostMessage="Aucun projet trouvé."
			errorMessage="Une erreur est survenue lors du chargement des projets."
		/>
	);
}

export default ProjectsPage;
