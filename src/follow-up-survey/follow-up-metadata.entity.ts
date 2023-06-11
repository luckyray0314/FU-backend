import {
  Column, Entity, PrimaryColumn
} from "typeorm";

@Entity("follow_up_metadata_entity")
export class FollowUpMetadataEntity {
  @PrimaryColumn()
  codeNumber: string;

  @Column()
  date: string;
}