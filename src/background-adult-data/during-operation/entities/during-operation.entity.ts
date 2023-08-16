import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('during_operation')
export class DuringOperationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
