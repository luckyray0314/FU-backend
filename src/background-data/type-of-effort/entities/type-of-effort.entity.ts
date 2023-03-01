import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_of_effort')
export class TypeOfEffort {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
