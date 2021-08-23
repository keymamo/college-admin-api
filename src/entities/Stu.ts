import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Prof } from "./Prof";
import { Classlist } from "./Classlist";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Entity("stu", { schema: "school" })
export class Stu {

  @ApiProperty({
    example: 1,
    description: '학생 id 번호',
    required: true
  })
  @IsNumber()
  @Column("int", { primary: true, name: "id", default: () => "'0'" })
  id: number;

  @ApiProperty({
    example: '김혁신',
    description: '학생 이름',
    required: true
  })
  @IsString()
  @Column("char", { name: "name", nullable: true, length: 8 })
  name: string | null;

  @ApiProperty({
    example: 2,
    description: '교수 id 번호',
    required: false
  })
  @IsNumber()
  @IsOptional()
  @Column("int", { name: "pid", nullable: true })
  pid: number | null;

  @ManyToOne(() => Prof, (prof) => prof.stus, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "pid", referencedColumnName: "pid" }])
  prof: Prof;

  @ManyToMany(() => Classlist, (classlist) => classlist.stus)
  classlists: Classlist[];
}
