import PostsList from '../components/PostsList';
import { type UsePostsOptions } from '../hooks/usePosts';
import { ExperiencePost, type ExperienceData } from '../types/experience.type';

function ExperiencePage() {
	const experienceHookOptions: UsePostsOptions<ExperienceData, ExperiencePost> =
		{
			queryKey: ['experience'],
			url: '/experiences.json',
			dataMapper: (item) => new ExperiencePost(item),
		};

	return (
		<PostsList
			postsHookOptions={experienceHookOptions}
			noPostMessage="Aucune expérience trouvée."
			errorMessage="Une erreur est survenue lors du chargement des expériences."
		/>
	);
}

export default ExperiencePage;
