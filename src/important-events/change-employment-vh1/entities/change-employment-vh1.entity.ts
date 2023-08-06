import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('change_employment_vh1')
export class ChangeEmploymentVh1Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
