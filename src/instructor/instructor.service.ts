import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { instructor } from '@prisma/client';

@Injectable()
export class InstructorService {
  constructor(private prisma: PrismaService){}

  async create(createInstructorDto: CreateInstructorDto): Promise<instructor> {
    const {departmentId, ...otherInstructorFeilds} = createInstructorDto
    try {
      return await this.prisma.instructor.create({
        data: {
          ...otherInstructorFeilds, 
          department: {
            connect: {
              id: departmentId
            }
          }
        }
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error creating instructor", error.message)
    }
  }

  async findAll(): Promise<instructor[]>  {
    try {
      return await this.prisma.instructor.findMany()
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error getting instructors", error.message)
    }
  }

  async findOne(id: string): Promise<instructor>  {
    try {
      return this.prisma.instructor.findUnique({
        where: {id}
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error getting instructor with that Id", error.message)
    }
  }

  async update(id: string, updateInstructorDto: UpdateInstructorDto): Promise<instructor>  {
    try {
      return await this.prisma.instructor.update({
        where: {id}, 
        data: updateInstructorDto
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error updating instructor", error.message)
    }
  }

  async remove(id: string): Promise<string>  {
    try {
      await this.prisma.instructor.delete({
        where: {id}
      })

      return 'instructor removed successfully'
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error removing instructor", error.message)
    }
  }
}
