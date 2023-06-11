import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedReasonForUpdateEntity } from './entities/selected-reason-for-update.entity';
import { SelectedReasonForUpdateService } from './selected-reason-for-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([ SelectedReasonForUpdateEntity ])],
  providers: [SelectedReasonForUpdateService],
  exports: [SelectedReasonForUpdateService]
})
export class SelectedReasonForUpdateModule {}
