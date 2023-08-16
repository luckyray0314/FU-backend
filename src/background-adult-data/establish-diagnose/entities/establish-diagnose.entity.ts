import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('establish_diagnose')
export class EstablishDiagnoseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
