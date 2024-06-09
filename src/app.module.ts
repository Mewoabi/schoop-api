import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; 
import { DepartmentModule } from './department/department.module'; 
import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { InstructorModule } from './instructor/instructor.module';
import { ClassroomModule } from './classroom/classroom.module';

@Module({
  imports: [
    PrismaModule,
    DepartmentModule,
    StudentModule,
    CourseModule,
    InstructorModule,
    ClassroomModule
    // FirstTimeAccessModule,
    // StaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
