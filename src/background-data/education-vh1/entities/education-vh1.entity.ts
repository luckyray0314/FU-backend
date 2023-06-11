import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('education_vh1')
export class EducationVh1Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
