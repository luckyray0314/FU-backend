import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterpreterRequiredEntity } from './entities/interpreter-required.entity';
import { SelectedInterpreterRequiredEntity } from './entities/selected-interpreter-required.entity';
import { InterpreterRequiredRepository } from './interpreter-required.repository';
import { InterpreterRequiredService } from './interpreter-required.service';
import { SelectedInterpreterRequiredRepository } from './selected-interpreter-required.repository';
import { SelectedInterpreterRequiredService } from './selected-interpreter-required.service';

@Module({
  imports: [TypeOrmModule.forFeature([InterpreterRequiredEntity, SelectedInterpreterRequiredEntity])],
  providers: [InterpreterRequiredService, InterpreterRequiredRepository, SelectedInterpreterRequiredService, SelectedInterpreterRequiredRepository],
  exports: [InterpreterRequiredService, InterpreterRequiredRepository, SelectedInterpreterRequiredService, SelectedInterpreterRequiredRepository]
})
export class InterpreterRequiredModule { }
