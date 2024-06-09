import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService){}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
      return await this.prisma.student.create({
        data: createStudentDto
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error creating student", error.message)
    }
  }

  async findAll(): Promise<Student[]> {
    try {
      return await this.prisma.student.findMany()
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error getting students", error.message)
    }
  }

  async findOne(id: string): Promise<Student> {
    try {
      return await this.prisma.student.findUnique({
        where: {id}
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error finding student with that id", error.message)
    }
  }

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    try {
      return await this.prisma.student.update({
        where: {id}, 
        data: updateStudentDto
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error updating student", error.message)
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.prisma.student.delete({
        where: {id}
      })
      return `student removed successfully`;
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error removing student", error.message)
    }
  }
}
