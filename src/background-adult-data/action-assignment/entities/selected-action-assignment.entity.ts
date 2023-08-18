import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ActionAssignmentEntity } from "./action-assignment.entity";

@Entity("selected_action_assignment")
export class SelectedActionAssignmentEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ActionAssignmentEntity)
  @JoinColumn()
  actionAssignment?: ActionAssignmentEntity;

  @Column({ nullable: true })
  other?: string;
}