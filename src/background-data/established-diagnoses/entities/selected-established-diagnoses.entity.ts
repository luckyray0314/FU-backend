import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EstablishedDiagnosesEntity } from "./established-diagnoses.entity";

@Entity("selected_established_diagnoses")
export class SelectedEstablishedDiagnosesEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EstablishedDiagnosesEntity, { nullable: true })
  @JoinColumn()
  establishedDiagnoses?: EstablishedDiagnosesEntity;

  @Column({ nullable: true })
  other?: string;
}