import {
  Column, Entity, PrimaryGeneratedColumn
} from "typeorm";

@Entity("score")
export class ScoreEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  codeNumber: string;

  @Column()
  person: number; // 1: child, 2: care giver 1, 3: care giver 2

  @Column()
  occasion: number; // 1: zero day, 2: six month, 3: twelve month

  @Column()
  date: string;

  @Column({
    type: "decimal"
  })
  score15: number;

  @Column({
    type: "simple-array",
    nullable: true
  })
  score15Answers: number[];

  @Column({
    type: "decimal"
  })
  ors: number;

  @Column({
    type: "simple-array",
    nullable: true
  })
  orsAndSatisfactionScaleAnswers: number[];
}