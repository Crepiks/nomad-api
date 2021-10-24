import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitDao } from 'src/common/dao/unit.dao';
import { UnitsRepository } from './data/units.repository';
import { UnitsService } from './domain/units.service';
import { UnitsController } from './presenter/units.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UnitDao])],
  controllers: [UnitsController],
  providers: [UnitsService, UnitsRepository],
})
export class UnitsModule {}
