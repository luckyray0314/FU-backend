import {
    Column, Entity, PrimaryGeneratedColumn
  } from "typeorm";
  
  @Entity('close-status')
  export class CloseStatusEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    codeNumber: string;

    @Column({ nullable: true })
    archivedCodeNumber?: string;

    @Column({ nullable: true })
    isAbsent?: string;

    @Column()
    processor: string;

    @Column()
    isClosed: string;
  }