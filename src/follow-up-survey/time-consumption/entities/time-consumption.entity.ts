import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('time_consumption')
export class TimeConsumptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
