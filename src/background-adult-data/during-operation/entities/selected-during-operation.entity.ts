import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { DuringOperationEntity } from "./during-operation.entity";

@Entity("selected_during_operation")
export class SelectedDuringOperationEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => DuringOperationEntity)
  @JoinColumn()
  duringOperation: DuringOperationEntity;
}