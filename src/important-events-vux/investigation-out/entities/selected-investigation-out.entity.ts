import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
  } from "typeorm";
  import { InvestigationOutEntity } from "./investigation-out.entity";
  
  @Entity("selected_investigation-out")
  export class SelectedInvestigationOutEntity {
    @PrimaryGeneratedColumn()
    id?: string;
    
    @Column()
    codeNumber: string;
  
    @ManyToOne(() => InvestigationOutEntity, { nullable: true })
    @JoinColumn()
    investigationOut?: InvestigationOutEntity;
  }