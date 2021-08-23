import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stu } from 'src/entities/Stu';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stu])
  ],
  controllers: [
    StudentController
  ],
  providers: [StudentService]
})
export class StudentModule {}
