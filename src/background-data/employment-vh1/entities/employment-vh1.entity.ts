import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employment_vh1')
export class EmploymentVh1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
