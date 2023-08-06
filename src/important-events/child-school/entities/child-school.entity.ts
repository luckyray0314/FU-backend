import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('child_school')
export class ChildSchoolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
