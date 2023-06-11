import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('established_diagnoses')
export class EstablishedDiagnosesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
