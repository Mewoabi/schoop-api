import { IsArray, IsIn, IsInt, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { Course } from "../entities/course.entity";

export class CreateCourseDto implements Omit<Course, 'id'>{
    @IsString() @IsNotEmpty()
    title: string;

    @IsNotEmpty() @IsInt()
    credits: number;

    @IsMongoId()
    instructorId: string;

    @IsMongoId()
    departmentId: string;

    @IsArray()
    @IsMongoId({each: true, message: "Each element must be a valid Mongodb objectId"})
    studentIds: string[];

    @IsArray()
    @IsMongoId({each: true, message: "Each element must be a valid Mongodb objectId"})
    prereq_ids: string[];

    @IsArray()
    @IsMongoId({each: true, message: "Each element must be a valid Mongodb objectId"})
    classroomIds: string[];
}
