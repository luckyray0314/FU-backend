import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterpreterRequiredEntity } from './entities/interpreter-required.entity';
import { InterpreterRequiredController } from './interpreter-required.controller';
import { InterpreterRequiredRepository } from './interpreter-required.repository';
import { InterpreterRequiredService } from './interpreter-required.service';

@Module({
  imports: [TypeOrmModule.forFeature([ InterpreterRequiredEntity ])],
  providers: [InterpreterRequiredService, InterpreterRequiredRepository],
  controllers: [InterpreterRequiredController],
  exports: [InterpreterRequiredService, InterpreterRequiredRepository]
})
export class InterpreterRequiredModule {}
