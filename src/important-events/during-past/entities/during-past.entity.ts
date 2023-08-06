import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('during_past')
export class DuringPastEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
