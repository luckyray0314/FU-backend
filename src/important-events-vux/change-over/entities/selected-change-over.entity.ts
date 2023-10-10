import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
  } from "typeorm";
  import { ChangeOverEntity } from "./change-over.entity";
  
  @Entity("selected_change_over")
  export class SelectedChangeOverEntity {
    @PrimaryGeneratedColumn()
    id?: string;
    
    @Column()
    codeNumber: string;
  
    @ManyToOne(() => ChangeOverEntity, { nullable: true })
    @JoinColumn()
    changeOver?: ChangeOverEntity;
  }