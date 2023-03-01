import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employment_vh2')
export class EmploymentVh2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
