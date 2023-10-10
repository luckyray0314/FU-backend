import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investigation-out')
export class InvestigationOutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
