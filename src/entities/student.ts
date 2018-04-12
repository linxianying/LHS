import { Module } from './module';
import { Announcement } from './announcement';
import { TimeEntry } from './timeEntry';

export class Student
{
	id: number;
	name: string;
	username: string;
	password: string;
	department: string;
	faculty: string;
	isPremium: boolean;
	telephone: string;
	email: string;
	modules: Module[];
	announcements: Announcement[];
	timeEntries: TimeEntry[];
		
	constructor()
	{
	}
}