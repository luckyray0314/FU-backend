import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('established_diagnoses')
export class EstablishedDiagnoses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
