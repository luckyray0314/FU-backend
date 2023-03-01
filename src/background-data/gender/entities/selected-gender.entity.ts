import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { GenderEntity } from "./gender.entity";

@Entity("selected_gender")
export class SelectedGenderEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => GenderEntity)
  @JoinColumn()
  gender: GenderEntity;
}