import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExplanationDao } from 'src/common/dao/explanation.dao';
import { ExplanationsRepository } from './data/explanations.repository';
import { ExplanationsService } from './domain/explanations.service';
import { ExplanationsController } from './presenter/explanations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExplanationDao])],
  controllers: [ExplanationsController],
  providers: [ExplanationsService, ExplanationsRepository],
})
export class ExplanationsModule {}
