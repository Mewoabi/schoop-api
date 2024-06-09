import { ApiProperty } from "@nestjs/swagger";
import { $Enums, classroom } from "@prisma/client";

export class Classroom implements classroom{
    id: string;

    @ApiProperty({enum: $Enums.Building})
    building: $Enums.Building;
    
    room_num: string;
    capacity: number;
    courseIds: string[];
}
