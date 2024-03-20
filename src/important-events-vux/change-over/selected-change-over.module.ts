import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedChangeOverEntity } from './entities/selected-change-over.entity';
import { SelectedChangeOverService } from './selected-change-over.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([SelectedChangeOverEntity])],
  providers: [SelectedChangeOverService],
  exports: [SelectedChangeOverService],
})
export class SelectedChangeOverModule {}
