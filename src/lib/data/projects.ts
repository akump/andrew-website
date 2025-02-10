import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'microsoft-teams-chrome-extension',
		color: '#8091F2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Teams extension that had 25,000 users. It has since been taken down since the Microsoft Teams 2.0 release',
		links: [{ to: 'https://github.com/akump/MS-Teams-Always-Available', label: 'GitHub' }],
		logo: Assets.Unknown,
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
			'I created and most importantly maintaned a GroupMe dark theme until GroupMe created one themselves',
		links: [{ to: 'https://github.com/akump/GroupMeDarkTheme', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'GroupMe Dark Theme',
		period: '2020 - 2024',
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Chrome Extension',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'andrews-recipes',
		color: 'black',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription: 'Simple website where my friends and family can easily find my recipes',
		links: [{ to: 'https://github.com/akump/andrews-recipes', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: "Andrew's Recipes",
		period: '2021 - Present',
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website'
	}
];

export const title = 'Projects';
