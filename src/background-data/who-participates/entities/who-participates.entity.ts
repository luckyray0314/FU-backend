import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('who_participates')
export class WhoParticipates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
