import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { OtherInterventionsEntity } from "./other-interventions.entity";

@Entity("selected_other_interventions")
export class SelectedOtherInterventionsEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => OtherInterventionsEntity, { nullable: true })
  @JoinColumn()
  otherInterventions?: OtherInterventionsEntity;

  @Column({ nullable: true })
  other?: string;
}