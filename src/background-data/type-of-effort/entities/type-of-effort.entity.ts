import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_of_effort')
export class TypeOfEffortEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
