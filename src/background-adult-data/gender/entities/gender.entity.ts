import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gender_adult')
export class GenderAdultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
