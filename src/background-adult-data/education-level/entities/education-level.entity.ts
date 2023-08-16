import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('education_level')
export class EducationLevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
