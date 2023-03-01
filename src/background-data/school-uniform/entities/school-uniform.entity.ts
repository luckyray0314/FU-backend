import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('school_uniform')
export class SchoolUniform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
