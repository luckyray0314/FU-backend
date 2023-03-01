import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employment_vh1')
export class EmploymentVh1Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
