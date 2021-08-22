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

@Index("pid", ["pid"], {})
@Entity("stu", { schema: "school" })
export class Stu {
  @Column("int", { primary: true, name: "id", default: () => "'0'" })
  id: number;

  @Column("char", { name: "name", nullable: true, length: 8 })
  name: string | null;

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
