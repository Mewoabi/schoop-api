import { IsEnum, IsInt, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { Department } from "../entities/department.entity";
import { $Enums } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartmentDto implements Omit<Department, 'id'>{
    @IsString() @IsNotEmpty()
    name: string;

    @IsInt() @IsNotEmpty()
    budjet: number;

    @IsEnum($Enums.Building) 
    @ApiProperty({enum: $Enums.Building})
    building: $Enums.Building; 
}
