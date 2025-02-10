import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'microsoft-teams-chrome-extension',
		color: '#8091F2',
		description: 'Built a Chrome extensions for teams that provides various functionality',
		shortDescription:
			'Teams extension that had 25,000 users. It has since been taken down since the Microsoft Teams 2.0 release.',
		links: [{ to: 'https://github.com/akump/MS-Teams-Always-Available', label: 'GitHub' }],
		logo: Assets.Teams,
		name: 'Microsoft Teams Chrome Extenion',
		period: '2021 - 2024',
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Chrome Extension'
	},
	{
		slug: 'groupme-dark-theme',
		color: '#00BCF2',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'I created and most importantly maintaned a GroupMe dark theme until GroupMe created one themselves.',
		links: [{ to: 'https://github.com/akump/GroupMeDarkTheme', label: 'GitHub' }],
		logo: Assets.GroupMe,
		name: 'GroupMe Dark Theme',
		period: '2020 - 2024',
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Chrome Extension',
		screenshots: []
	},
	{
		slug: 'andrews-recipes',
		color: 'black',
		description: 'Built this website in svelte and automated the adding of new recipes',
		shortDescription: 'Simple website where my friends and family can easily find my recipes.',
		links: [
			{ to: 'https://github.com/akump/andrews-recipes', label: 'GitHub' },
			{ to: 'https://andrews-recipes.surge.sh/', label: 'Link' }
		],
		logo: Assets.AndrewsRecipes,
		name: "Andrew's Recipes",
		period: '2021 - Present',
		skills: getSkills('svelte'),
		type: 'Personal Website'
	}
];

export const title = 'Projects';
