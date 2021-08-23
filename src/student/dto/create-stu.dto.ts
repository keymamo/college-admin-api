import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class StudentDto {
    
    @ApiProperty({
        required: true,
        example: 1, 
        description: '학생 아이디 번호'
    })
    @IsNumber()
    readonly id: number;

    @ApiProperty({
        required: true,
        example: "브라이언",
        description: "학생 이름"
    })
    @IsString()
    readonly name: string;

    @ApiProperty({
        required: false,
        example: "",
        description: "교수 아이디 번호"
    })
    @IsOptional()
    @IsNumber()
    readonly pid: number
}

