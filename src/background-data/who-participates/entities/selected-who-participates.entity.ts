import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { WhoParticipatesEntity } from "./who-participates.entity";

@Entity("selected_who_participates")
export class SelectedWhoParticipatesEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => WhoParticipatesEntity, { nullable: true })
  @JoinColumn()
  whoParticipates: WhoParticipatesEntity;

  @Column({ nullable: true })
  other: string;
}