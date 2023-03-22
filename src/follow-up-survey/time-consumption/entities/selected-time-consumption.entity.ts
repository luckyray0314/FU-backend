import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { TimeConsumptionEntity } from "./time-consumption.entity";

@Entity("selected_time_consumption")
export class SelectedTimeConsumptionEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => TimeConsumptionEntity)
  @JoinColumn()
  timeConsumption?: TimeConsumptionEntity;

  @Column({ nullable: true })
  other?: string;
}