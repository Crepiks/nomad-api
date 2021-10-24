import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitDao } from 'src/common/dao/unit.dao';
import { Unit } from 'src/common/entities/unit';
import { Repository } from 'typeorm';

@Injectable()
export class UnitsRepository {
  constructor(
    @InjectRepository(UnitDao)
    private readonly unitsRepository: Repository<UnitDao>,
  ) {}

  async findAll(): Promise<Unit[]> {
    const units = await this.unitsRepository.find();
    return units.map(this.mapUnitDaoToEntity);
  }

  async findById(unitId: number): Promise<Unit> {
    const unit = await this.unitsRepository.findOne(unitId);
    if (!unit) {
      return null;
    }

    return this.mapUnitDaoToEntity(unit);
  }

  private mapUnitDaoToEntity(unit: UnitDao): Unit {
    return {
      id: unit.id,
      name: unit.name,
      updatedAt: unit.updatedAt,
      createdAt: unit.createdAt,
      deletedAt: unit.deletedAt,
      chapterId: unit.chapterId,
      chapter: unit.chapter,
    };
  }
}
