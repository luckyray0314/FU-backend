import { User } from "src/user/user.entity";
import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryColumn
} from "typeorm";

@Entity('background_metadata_entity')
export class BackgroundMetadataEntity {
  @PrimaryColumn()
  codeNumber: string;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: true })
  yearOfBirth: number;

  @Column({ nullable: true })
  country: string;

  // @Column({ nullable: true, default: false })
  // isClosed: string;

  // @ManyToOne(() => User, { nullable: true })
  // @JoinColumn()
  // processor: User;
}