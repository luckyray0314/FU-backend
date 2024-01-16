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

    @Column()
    processor: string;

    @Column()
    isClosed: string;

    @Column({ nullable: true })
    isGuardianOne?: string;

    @Column({ nullable: true })
    isGuardianTwo?: string;

    @Column({ nullable: true })
    isChild?: string;
  }