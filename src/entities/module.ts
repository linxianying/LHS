import { Lecturer } from './lecturer';
import { Announcement } from './announcement';
import { TeachingAssistant } from './teachingAssistant';
import { FileEntity } from './fileEntity';
import { Student } from './student';

export class Module
{
	id: number;
	classSize: number;
	descrption: string;
	examDate: Date;
	modularCredit: number;
	moduleCode: string;
	moduleName: string;
	lecturers: Lecturer[];
	TAs: TeachingAssistant[];
	students: Student[];
	announcements: Announcement[];
	files: FileEntity[];
		
	constructor()
	{
	}
}