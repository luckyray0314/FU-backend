import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterpreterRequiredEntity } from './entities/interpreter-required.entity';
import { InterpreterRequiredService } from './interpreter-required.service';

@Module({
  imports: [TypeOrmModule.forFeature([InterpreterRequiredEntity])],
  providers: [InterpreterRequiredService],
  exports: [InterpreterRequiredService]
})
export class InterpreterRequiredModule { }
