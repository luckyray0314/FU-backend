import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { EstablishedDiagnosesEntity } from "./established-diagnoses.entity";

@Entity("selected_established_diagnoses")
export class SelectedEstablishedDiagnosesEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EstablishedDiagnosesEntity, { nullable: true })
  @JoinColumn()
  establishedDiagnoses: EstablishedDiagnosesEntity;

  @Column({ nullable: true })
  other: string;
}