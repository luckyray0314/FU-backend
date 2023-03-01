import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EstablishedDiagnosesEntity } from "./established-diagnoses.entity";

@Entity("selected_established_diagnoses")
export class SelectedEstablishedDiagnosesEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EstablishedDiagnosesEntity)
  @JoinColumn()
  establishedDiagnoses: EstablishedDiagnosesEntity;
}