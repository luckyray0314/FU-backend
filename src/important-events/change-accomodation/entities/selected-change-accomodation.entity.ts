import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ChangeAccomodationEntity } from "./change-accomodation.entity";

@Entity("selected_change_accomodation")
export class SelectedChangeAccomodationEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ChangeAccomodationEntity, { nullable: true })
  @JoinColumn()
  changeAccomodation?: ChangeAccomodationEntity;
}