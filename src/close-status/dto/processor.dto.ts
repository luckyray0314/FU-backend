import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ProcessorDto {
  @ApiProperty()
  @IsString()
  processor: string;
}
