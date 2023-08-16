import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('other_ongoing_effort')
export class OtherOngoingEffortEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
