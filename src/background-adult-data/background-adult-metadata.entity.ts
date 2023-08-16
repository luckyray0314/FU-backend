import {
  Column, Entity, PrimaryColumn
} from "typeorm";

@Entity("background-adult_metadata_entity")
export class BackgroundAdultMetadataEntity {
  @PrimaryColumn()
  codeNumber: string;

  @Column()
  date: string;

  @Column()
  yearOfBirth: number;

  @Column({ nullable: true })
  country: string;
}