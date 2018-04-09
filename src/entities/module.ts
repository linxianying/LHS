export class Module
{
	id: number;
	classSize: number;
	descrption: string;
	examDate: Date;
	modularCredit: number;
	moduleCode: string;
	moduleName: string;
	lecturers: Lectuer[];
	TAs: TeachingAssistant[];
	students: Student[];
	announcements: Announcement[];
	files: FileEntity[];
		
	constructor()
	{
	}
}