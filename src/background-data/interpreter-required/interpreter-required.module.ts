import { Module } from '@nestjs/common';
import { InterpreterRequiredService } from './interpreter-required.service';
import { InterpreterRequiredController } from './interpreter-required.controller';

@Module({
  controllers: [InterpreterRequiredController],
  providers: [InterpreterRequiredService]
})
export class InterpreterRequiredModule {}
