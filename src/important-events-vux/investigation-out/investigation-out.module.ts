
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestigationOutEntity } from './entities/investigation-out.entity';
import { InvestigationOutService } from './investigation-out.service';

@Module({
  imports: [TypeOrmModule.forFeature([InvestigationOutEntity])],
  providers: [InvestigationOutService],
  exports: [InvestigationOutService]
})
export class InvestigationOutModule { }
