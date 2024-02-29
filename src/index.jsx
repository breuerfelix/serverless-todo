import { hydrate, prerender as ssr } from 'preact-iso';

import './base.css';
import './todo.css';
import App from './app'

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
