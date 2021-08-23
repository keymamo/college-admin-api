import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stu } from 'src/entities/Stu';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    private stus: Stu[] = [];

    constructor(
        @InjectRepository(Stu)
        private stuRepository: Repository<Stu>
    ){}

    async getAllStu(): Promise<Stu[]>{
        
        const result = await this.stuRepository.find();
        return result;
    }

    async addStudent(stuData: Stu){

        const result = await this.stuRepository.save(stuData);

        return result;
    }
}
