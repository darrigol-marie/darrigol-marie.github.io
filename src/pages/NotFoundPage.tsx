import { NavLink } from 'react-router-dom';

function NotFoundPage() {
	return (
		<>
			<h1>Erreur 404</h1>
			<article>La page que vous cherchez n'existe pas ou a été déplacée.</article>
			<NavLink to="/">Retour à l'accueil</NavLink>
		</>
	);
}

export default NotFoundPage;
