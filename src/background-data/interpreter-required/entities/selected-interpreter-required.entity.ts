import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { InterpreterRequiredEntity } from "./interpreter-required.entity";

@Entity("selected_interpreter_required")
export class SelectedInterpreterRequiredEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => InterpreterRequiredEntity)
  @JoinColumn()
  interpreterRequired: InterpreterRequiredEntity;
}