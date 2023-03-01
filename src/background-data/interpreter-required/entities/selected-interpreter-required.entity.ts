import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { InterpreterRequiredEntity } from "./interpreter-required.entity";

@Entity("selected_interpreter_required")
export class SelectedInterpreterRequiredEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => InterpreterRequiredEntity)
  @JoinColumn()
  interpreterRequired: InterpreterRequiredEntity;
}