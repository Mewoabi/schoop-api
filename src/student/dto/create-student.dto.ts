import { IsArray, IsInt, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { Student } from "../entities/student.entity";

export class CreateStudentDto implements Omit<Student, 'id'>{
    @IsMongoId()
    departmentId: string;

    @IsString() @IsNotEmpty()
    name: string;

    @IsInt() @IsNotEmpty()
    tot_credits: number;

    @IsArray()
    @IsMongoId({each: true, message: "each element must be a valid mongodb objectId"})
    courseIds: string[];

    @IsMongoId()
    supervisorId: string;
}
