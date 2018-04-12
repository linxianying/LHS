
import { Module } from './module';
import { Lecturer } from './lecturer';

export class Announcement
{
	id: number;
	name: string;
	description: string;
	date: Date;
	lecturer: Lecturer;
	module: Module;
		
	constructor()
	{
	}
}