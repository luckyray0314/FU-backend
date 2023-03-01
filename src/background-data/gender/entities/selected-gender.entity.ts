import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { Gender } from "./gender.entity";

@Entity("selected_gender")
export class SelectedGender {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => Gender)
  @JoinColumn()
  gender: Gender;
}