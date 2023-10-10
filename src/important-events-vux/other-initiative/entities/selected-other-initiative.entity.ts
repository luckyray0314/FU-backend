import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
  } from "typeorm";
  import { OtherInitiativeEntity } from "./other-initiative.entity";
  
  @Entity("selected_other-initiative")
  export class SelectedOtherInitiativeEntity {
    @PrimaryGeneratedColumn()
    id?: string;
    
    @Column()
    codeNumber: string;
  
    @ManyToOne(() => OtherInitiativeEntity, { nullable: true })
    @JoinColumn()
    otherInitiative?: OtherInitiativeEntity;
  }