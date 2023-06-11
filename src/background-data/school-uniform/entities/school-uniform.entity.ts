import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('school_uniform')
export class SchoolUniformEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
