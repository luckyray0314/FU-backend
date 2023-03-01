import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('education_vh2')
export class EducationVh2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
