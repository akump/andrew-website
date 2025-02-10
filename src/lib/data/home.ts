import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Andrew';

export const lastName = 'Kump';

export const description = `I am an experienced full stack software engineer currently building Water Network Optimization(WNO) on the Xylem Vue platform. WNO is a real time digital twin of a city's water infrastructure built using Svelte, Node.js, GraphQL, Express, PostgreSQL, MongoDB, InfluxDB, Mapbox, Highcharts, and many more technologies all deployed on AWS. I lead all development efforts on the front end, and also develop across the stack. Welcome to my website! Note: some of the site is still a WIP`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/akump/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/andrew-kump-85a778105/'
	},

	{
		platform: Platform.Email,
		link: 'kumpandrew@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
