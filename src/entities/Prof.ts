import { Column, Entity, OneToMany } from "typeorm";
import { Classlist } from "./Classlist";
import { Stu } from "./Stu";

@Entity("prof", { schema: "school" })
export class Prof {
  @Column("int", { primary: true, name: "pid" })
  pid: number;

  @Column("char", { name: "name", nullable: true, length: 8 })
  name: string | null;

  @OneToMany(() => Classlist, (classlist) => classlist.prof)
  classlists: Classlist[];

  @OneToMany(() => Stu, (stu) => stu.prof)
  stus: Stu[];
}
