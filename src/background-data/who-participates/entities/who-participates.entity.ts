import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('who_participates')
export class WhoParticipatesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
