import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { userInfo } from 'os';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

   async getHello(): Promise<string> { 
     return "hello"
  }
}
