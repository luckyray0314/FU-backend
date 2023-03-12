import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedInterpreterRequiredEntity } from './entities/selected-interpreter-required.entity';
import { SelectedInterpreterRequiredService } from './selected-interpreter-required.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedInterpreterRequiredEntity])],
  providers: [SelectedInterpreterRequiredService],
  exports: [SelectedInterpreterRequiredService]
})
export class SelectedInterpreterRequiredModule { }
