import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Univeristy of Cincinnati',
		logo: Assets.UC,
		name: '',
		organization: '',
		period: '5 year program: 2014 - 2019',
		shortDescription: '',
		color: 'red',
		slug: 'dummy-education-item'
	},
	{
		degree: 'Siemens Co-op/Internship',
		description: 'Interned for a total of 5 full school semesters and worked part time 3 semesters',
		location: 'Milford, Ohio',
		logo: Assets.Siemens,
		name: '',
		organization: '',
		period: 'January 2016 - May 2019',
		shortDescription: 'test',
		color: '#009999',
		slug: 'dummy-education-item-2	'
	}
];

export const title = 'Education';
