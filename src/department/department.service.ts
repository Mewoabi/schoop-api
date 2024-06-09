import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaClient } from '@prisma/client';  
import { Department } from './entities/department.entity';

const prisma = new PrismaClient()

@Injectable()
export class DepartmentService {
  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    try {
      const department = await prisma.department.create({
        data: createDepartmentDto
      })
      return department;
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error creating department", error.message)
    }
  }

  async findAll(): Promise<Department[]> {
    try {
      const allDepartments = await prisma.department.findMany()
      return allDepartments
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error getting departments", error.message)
    }
  }

  async findOne(id: string): Promise<Department> {
    try {
      const department = await prisma.department.findUnique({
        where: {
          id,
        }
      })
      return department
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error finding department with that id", error.message)
    }
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
    try {
      const updatedDepartment = await prisma.department.update({
        where: {
          id,
        },
        data: updateDepartmentDto
      })

      return updatedDepartment
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error updating that department", error.message)
    }
  }

  async remove(id: string): Promise<Department> {
    try {
      const deletedDepartment = await prisma.department.delete({
        where: {
          id,
        }
      })
      return deletedDepartment
    } catch (error) {
      console.log(error)
      throw new BadRequestException("error deleting that department", error.message)
    }
  }
}
