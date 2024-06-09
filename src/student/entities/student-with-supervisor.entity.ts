import { Instructor } from "src/instructor/entities/instructor.entity";
import { Student } from "./student.entity";

export class StudentWithSupervisor extends Student {
    supervisor: Instructor;
}