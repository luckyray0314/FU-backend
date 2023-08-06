import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('change_accomodation')
export class ChangeAccomodationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
