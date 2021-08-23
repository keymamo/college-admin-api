import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Stu } from 'src/entities/Stu';
import { StudentDto } from './dto/create-stu.dto';
import { StudentService } from './student.service';

@ApiTags('Student')
@Controller('api/stu')
export class StudentController {
    constructor(private readonly stuService:StudentService){}

    @ApiOperation({summary: '전체 학생 리스트'})
    @ApiResponse({
        description: '전체 학생 리스트를 가져온다',
        status: 200,
        type: Stu
    })
    @Get()
    async getAllStu(){
        
        const result = await this.stuService.getAllStu();

        if(result.length === 0){
            return '등록된 학생 없음'
        }

        return result;
    }

    @ApiOperation({summary: '학생 추가'})
    @ApiResponse({
        description: '새로운 학생을 추가한다.',
        status: 201        
    })
    @ApiResponse({
        description: '서버 에러',
        status: 500
    })
    @Post()
    async addStudent(@Body() stuData:Stu){

        const result = await this.stuService.addStudent(stuData);
        return Object.assign({
            data: {...result},
            statusCode: 201,
            statusMsg: `inserted successfully`
        });

    }
    
}
