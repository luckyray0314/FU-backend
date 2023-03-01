import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { InterpreterRequired } from "./interpreter-required.entity";

@Entity("selected_interpreter_required")
export class SelectedInterpreterRequired {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => InterpreterRequired)
  @JoinColumn()
  interpreterRequired: InterpreterRequired;
}