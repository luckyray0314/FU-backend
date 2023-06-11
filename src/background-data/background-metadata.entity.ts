import {
  Column, Entity, PrimaryColumn
} from "typeorm";

@Entity("background_metadata_entity")
export class BackgroundMetadataEntity {
  @PrimaryColumn()
  codeNumber: string;

  @Column()
  date: string;

  @Column()
  yearOfBirth: number;

  @Column({ nullable: true })
  country: string;
}