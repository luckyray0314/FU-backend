import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('change_employment_vh2')
export class ChangeEmploymentVh2Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
