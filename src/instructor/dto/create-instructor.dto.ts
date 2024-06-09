import { $Enums } from "@prisma/client";
import { Instructor } from "../entities/instructor.entity";
import { IsEnum, IsInt, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateInstructorDto implements Omit<Instructor, 'id'>{
    @IsString() @IsNotEmpty()
    name: string;

    @IsEnum($Enums.Sex)
    @ApiProperty({enum: $Enums.Sex})
    @IsNotEmpty()
    sex: $Enums.Sex;

    @IsInt() @IsNotEmpty()
    salary: number;

    @IsMongoId()
    departmentId: string;
}
