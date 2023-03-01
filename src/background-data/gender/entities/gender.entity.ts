import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gender')
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
