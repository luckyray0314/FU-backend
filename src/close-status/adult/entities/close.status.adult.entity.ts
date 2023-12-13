import {
    Column, Entity, PrimaryGeneratedColumn
  } from "typeorm";
  
  @Entity("close-status-adult")
  export class CloseStatusAdultEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    codeNumber: string;
  
    @Column()
    processor: string; 
  
    @Column()
    isClosed: string; 
  }