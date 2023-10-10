import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedInvestigationOutEntity } from './entities/selected-investigation-out.entity';
import { SelectedInvestigationOutService } from './selected-investigation-out.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedInvestigationOutEntity])],
  providers: [SelectedInvestigationOutService],
  exports: [SelectedInvestigationOutService]
})
export class SelectedInvestigationOutModule { }
