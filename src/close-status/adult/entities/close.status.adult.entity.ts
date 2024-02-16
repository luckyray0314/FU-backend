import {
    Column, Entity, PrimaryGeneratedColumn
  } from "typeorm";
  
  @Entity('close-status-adult')
  export class CloseStatusAdultEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    codeNumber: string;

    @Column({ nullable: true })
    archivedCodeNumber?: string;

    @Column({ nullable: true })
    isAbsent?: string;

    @Column({ nullable: true })
    status?: string;

    @Column()
    processor: string;

    @Column()
    isClosed: string;
  }