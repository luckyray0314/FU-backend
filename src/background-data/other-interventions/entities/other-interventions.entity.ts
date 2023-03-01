import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('other_intervention')
export class OtherInterventionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
