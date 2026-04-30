import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
	const pages: any[] = [];

	return (
		<>
			<div id="page">
				<main>
					<h1>Accueil</h1>
					<nav>
						<ul>
							{pages.length === 0 && (
								<li>
									<a>Accueil</a>
								</li>
							)}
							{pages.map((page) => {
								return (
									<li>
										<a>{page.name}</a>
									</li>
								);
							})}
						</ul>
					</nav>
					<article>
						<Outlet />
					</article>
				</main>
			</div>
			<footer>© 2025 Marie Darrigol</footer>
		</>
	);
}

export default App;
