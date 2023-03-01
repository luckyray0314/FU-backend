import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reason_for_update')
export class ReasonForUpdateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
