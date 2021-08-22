import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Prof } from "./Prof";
import { Stu } from "./Stu";

@Index("pid", ["pid"], {})
@Entity("classlist", { schema: "school" })
export class Classlist {
  @Column("int", { primary: true, name: "cid", default: () => "'0'" })
  cid: number;

  @Column("int", { name: "pid" })
  pid: number;

  @Column("char", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @ManyToOne(() => Prof, (prof) => prof.classlists, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "pid", referencedColumnName: "pid" }])
  prof: Prof;

  @ManyToMany(() => Stu, (stu) => stu.classlists)
  @JoinTable({
    name: "sugang",
    joinColumns: [{ name: "cid", referencedColumnName: "cid" }],
    inverseJoinColumns: [{ name: "uid", referencedColumnName: "id" }],
    schema: "school",
  })
  stus: Stu[];
}
