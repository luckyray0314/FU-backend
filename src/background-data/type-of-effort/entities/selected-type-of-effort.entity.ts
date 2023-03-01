import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { TypeOfEffortEntity } from "./type-of-effort.entity";

@Entity("selected_type_of_effort")
export class SelectedTypeOfEffortEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => TypeOfEffortEntity)
  @JoinColumn()
  typeOfEffort: TypeOfEffortEntity;
}