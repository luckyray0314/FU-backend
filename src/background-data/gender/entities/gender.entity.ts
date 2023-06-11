import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gender')
export class GenderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
