import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reason_for_update')
export class ReasonForUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
