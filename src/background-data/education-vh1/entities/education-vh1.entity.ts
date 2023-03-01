import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('education_vh1')
export class EducationVh1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
