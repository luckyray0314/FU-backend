import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { TypeOfEffortEntity } from "./type-of-effort.entity";

@Entity("selected_type_of_effort")
export class SelectedTypeOfEffortEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => TypeOfEffortEntity)
  @JoinColumn()
  typeOfEffort: TypeOfEffortEntity;
}