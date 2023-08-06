import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ChildSchoolEntity } from "./child-school.entity";

@Entity("selected_child_school")
export class SelectedChildSchoolEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ChildSchoolEntity, { nullable: true })
  @JoinColumn()
  childSchool?: ChildSchoolEntity;
}