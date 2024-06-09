import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Student } from './entities/student.entity';
import { createReadStream } from 'fs';
import { instructor } from '@prisma/client';
import { StudentWithSupervisor } from './entities/student-with-supervisor.entity';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService){}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const {courseIds, departmentId,supervisorId, ...simpleStudentFields} = createStudentDto
    try {
      return await this.prisma.student.create({
        data: {
          ...simpleStudentFields, 
          supervisor: {
            connect: {
              id: supervisorId
            }
          }, 
          department: {
            connect: {
              id: departmentId
            }
          }, 
          courses: {
            connect: courseIds.map(courseId =>( {id: courseId} ))
          }
        }
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

  async getstudentWithSupervisor (id: string): Promise<StudentWithSupervisor> {
    try {
      const studentWithSupervisor = await this.prisma.student.findUnique({
        where: {id}, 
        include: {supervisor: true}
      })
      return studentWithSupervisor
    } catch (error) {
      console.log(error); 
      throw new BadRequestException("error getting supervisor for student with that id", error.message)
    }
  }
}
