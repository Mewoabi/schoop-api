import { $Enums } from "@prisma/client";
import { Classroom } from "../entities/classroom.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEAN, IsEnum, IsInt, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateClassroomDto implements Omit<Classroom, 'id'>{
    @ApiProperty({enum: $Enums.Building})
    @IsEnum($Enums.Building)
    @IsNotEmpty()
    building: $Enums.Building;

    @IsString() @IsNotEmpty()
    room_num: string;

    @IsInt() @IsNotEmpty()
    capacity: number;

    @IsArray()
    @IsMongoId({ each: true, message: 'Each ID in the array must be a valid MongoDB ObjectId' })
    courseIds: string[];
}
