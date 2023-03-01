import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { WhoParticipates } from "./who-participates.entity";

@Entity("selected_who_participates")
export class SelectedWhoParticipates {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => WhoParticipates)
  @JoinColumn()
  whoParticipates: WhoParticipates;
}