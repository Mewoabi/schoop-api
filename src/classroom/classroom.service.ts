import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor (private prisma: PrismaService){}

  async create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    const {courseIds, ...otherClassroomProps} = createClassroomDto
     try {
        return await this.prisma.classroom.create({
        data: {
          ...otherClassroomProps, 
          courses: {
            connect: courseIds.map(courseId => ({id: courseId}))
          }
        }
       })
     } catch (error) {
      console.log(error)
      throw new BadRequestException("error creating classroom", error.message)
     }
  }

  async findAll(): Promise<Classroom[]> {
    try {
      return await this.prisma.classroom.findMany()
    } catch (error) {
      console.log(error)
      throw new BadRequestException("no classroom exists with that Id", error.message)
    }
  }

  async findOne(id: string): Promise<Classroom> {
    try {
      return await this.prisma.classroom.findUnique({
        where: {id}
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("no classroom exists with that Id", error.message)
    }
  }

  async update(id: string, updateClassroomDto: UpdateClassroomDto): Promise<Classroom> {
    try {
      return  await this.prisma.classroom.update({
        where: {id}, 
        data: updateClassroomDto
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("no classroom exists with that Id", error.message)
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.prisma.classroom.delete({
        where:{id}
      })

      return "classroom deleted successfully"
    } catch (error) {
      console.log(error)
      throw new BadRequestException("no classroom exists with that Id", error.message)
    }
  }
}
