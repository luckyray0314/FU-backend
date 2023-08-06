import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('otherinterventions_started')
export class OtherInterventionsStartedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
