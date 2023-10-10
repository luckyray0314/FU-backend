import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chagne_over')
export class ChangeOverEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
