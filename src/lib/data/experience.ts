import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'xylem',
		company: 'Xylem',
		description: 'Building Water Network Optimization(WNO)',
		contract: ContractType.FullTime,
		type: 'Full Stack Software Engineer',
		location: 'Remote',
		period: 'July 2021 - Present',
		skills: getSkills('ts', 'js', 'graphql'),
		name: 'Senior Full Stack Software Engineer',
		color: '#007FA8',
		links: [],
		logo: Assets.Xylem,
		shortDescription: 'Building Water Network Optimization(WNO)'
	},
	{
		slug: 'siemens',
		company: 'Siemens PLM Software',
		description: 'Building Active Workspace aka Teamcenter',
		contract: ContractType.FullTime,
		type: 'Software Engineer',
		location: 'Milford, Ohio',
		period: 'May 2019 - July 2021',
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Software Engineer',
		color: '#009999',
		links: [],
		logo: Assets.Siemens,
		shortDescription: 'Building Active Workspace aka Teamcenter'
	},
	{
		slug: 'siemens-coop',
		company: 'Siemens PLM Software',
		description: 'Building Active Workspace aka Teamcenter',
		contract: ContractType.Internship,
		type: 'Software Engineer',
		location: 'Milford, Ohio',
		period: 'January 2016 - September 2019',
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Software Engineer Co-op',
		color: '#009999',
		links: [],
		logo: Assets.Siemens,
		shortDescription:
			'Intern for 2 different teams for 5 school semesters and 3 part time semesters'
	}
];

export const title = 'Experience';
