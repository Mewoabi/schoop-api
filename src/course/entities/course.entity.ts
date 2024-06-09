import { course } from "@prisma/client";

export class Course implements course{
    id: string;
    title: string;
    credits: number;
    instructorId: string;
    departmentId: string;
    studentIds: string[];
    prereq_ids: string[];
    classroomIds: string[];
}
