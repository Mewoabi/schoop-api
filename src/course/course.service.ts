import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { course } from '@prisma/client';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService){}

  async create(createCourseDto: CreateCourseDto): Promise<course> {
   try {
     return await this.prisma.course.create({
      data: createCourseDto
     })
   } catch (error) {
    console.log(error);
    throw new BadRequestException("error creating course", error.message)
   }
  }

  async findAll(): Promise<course[]>
 {
    try {
      return await this.prisma.course.findMany()
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error getting courses", error.message)
    }
  }

  async findOne(id: string): Promise<course> {
    try {
      return await this.prisma.course.findUnique({
        where: {id}
      });
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error getting course with that id", error.message)
    }
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<course> {
    try {
      return await this.prisma.course.update({
        where: {id}, 
        data: updateCourseDto
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error updating courses", error.message)
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.course.delete({
        where: {id}
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error deleting courses", error.message)
    }
  }
}
