import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { TypeOfEffort } from "./type-of-effort.entity";

@Entity("selected_type_of_effort")
export class SelectedTypeOfEffort {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => TypeOfEffort)
  @JoinColumn()
  typeOfEffort: TypeOfEffort;
}