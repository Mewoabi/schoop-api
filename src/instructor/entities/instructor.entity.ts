import { ApiProperty } from "@nestjs/swagger";
import { $Enums, instructor } from "@prisma/client";

export class Instructor implements instructor{
    id: string;
    name: string;
    
    @ApiProperty({enum: $Enums.Sex})
    sex: $Enums.Sex;
    salary: number;
    departmentId: string;
}
