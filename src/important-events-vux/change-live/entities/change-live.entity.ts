import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chagne_live')
export class ChangeLiveEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
