import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employment')
export class EmploymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
