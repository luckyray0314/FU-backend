import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CloseStatusDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codeNumber: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  archivedCodeNumber?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  isAbsent?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  processor: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  isClosed: string;
}
