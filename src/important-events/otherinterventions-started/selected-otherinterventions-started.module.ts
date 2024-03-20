import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedOtherInterventionsStartedEntity } from './entities/selected-otherinterventions-started.entity';
import { SelectedOtherInterventionsStartedService } from './selected-otherinterventions-started.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([SelectedOtherInterventionsStartedEntity]),
  ],
  providers: [SelectedOtherInterventionsStartedService],
  exports: [SelectedOtherInterventionsStartedService],
})
export class SelectedOtherInterventionsStartedModule {}
