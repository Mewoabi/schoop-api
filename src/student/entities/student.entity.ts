import { student } from "@prisma/client";

export class Student implements student{
    id: string;
    departmentId: string;
    name: string;
    tot_credits: number;
    courseIds: string[];
    supervisorId: string;
}
