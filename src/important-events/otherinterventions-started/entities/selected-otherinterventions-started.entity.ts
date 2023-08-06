import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { OtherInterventionsStartedEntity } from "./otherinterventions-started.entity";

@Entity("selected_otherinterventions_started")
export class SelectedOtherInterventionsStartedEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => OtherInterventionsStartedEntity, { nullable: true })
  @JoinColumn()
  otherInterventionsStarted?: OtherInterventionsStartedEntity;
}