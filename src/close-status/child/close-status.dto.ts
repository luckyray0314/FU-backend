import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

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

  @ApiProperty()
  @IsString()
  @IsOptional()
  isGuardianOne?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  isGuardianTwo?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  isChild?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  status?: string;
}
