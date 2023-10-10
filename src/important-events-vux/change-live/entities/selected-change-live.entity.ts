import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
  } from "typeorm";
  import { ChangeLiveEntity } from "./change-live.entity";
  
  @Entity("selected_change_live")
  export class SelectedChangeLiveEntity {
    @PrimaryGeneratedColumn()
    id?: string;
    
    @Column()
    codeNumber: string;
  
    @ManyToOne(() => ChangeLiveEntity, { nullable: true })
    @JoinColumn()
    changeLive?: ChangeLiveEntity;
  }