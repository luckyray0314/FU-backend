import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EstablishedDiagnoses } from "./established-diagnoses.entity";

@Entity("selected_established_diagnoses")
export class SelectedEstablishedDiagnoses {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EstablishedDiagnoses)
  @JoinColumn()
  establishedDiagnoses: EstablishedDiagnoses;
}