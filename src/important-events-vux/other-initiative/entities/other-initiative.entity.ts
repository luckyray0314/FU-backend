import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('other-initiative')
export class OtherInitiativeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
