import { ApiProperty } from "@nestjs/swagger";
import { $Enums, department } from "@prisma/client";

export class Department implements department{
    id: string;
    name: string;
    budjet: number;

    @ApiProperty({enum: $Enums.Building})
    building: $Enums.Building;
}
