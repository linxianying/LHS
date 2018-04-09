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