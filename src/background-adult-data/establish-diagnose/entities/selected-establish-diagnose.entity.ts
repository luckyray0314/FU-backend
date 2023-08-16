import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EstablishDiagnoseEntity } from "./establish-diagnose.entity";

@Entity("selected_establish_diagnose")
export class SelectedEstablishDiagnoseEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EstablishDiagnoseEntity)
  @JoinColumn()
  establishDiagnose: EstablishDiagnoseEntity;
}