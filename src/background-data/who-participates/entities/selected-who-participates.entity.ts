import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { WhoParticipatesEntity } from "./who-participates.entity";

@Entity("selected_who_participates")
export class SelectedWhoParticipatesEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => WhoParticipatesEntity, { nullable: true })
  @JoinColumn()
  whoParticipates?: WhoParticipatesEntity;

  @Column({ nullable: true })
  other?: string;
}