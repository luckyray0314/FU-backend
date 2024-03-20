import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedOtherInitiativeEntity } from './entities/selected-other-initiative.entity';
import { SelectedOtherInitiativeService } from './selected-other-initiative.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([SelectedOtherInitiativeEntity])],
  providers: [SelectedOtherInitiativeService],
  exports: [SelectedOtherInitiativeService],
})
export class SelectedOtherInitiativeModule {}
