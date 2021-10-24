import { Injectable, NotFoundException } from '@nestjs/common';
import { UnitsRepository } from '../data/units.repository';
import { CreateUnitDto } from '../dto/create-unit.dto';
import { UpdateUnitDto } from '../dto/update-unit.dto';

@Injectable()
export class UnitsService {
  constructor(private readonly unitsRepository: UnitsRepository) {}

  create(createUnitDto: CreateUnitDto) {
    return 'This action adds a new unit';
  }

  findAll() {
    return this.unitsRepository.findAll();
  }

  async findOne(unitId: number) {
    const unit = await this.unitsRepository.findById(unitId);
    if (!unit) {
      throw new NotFoundException('Unit not found');
    }

    return unit;
  }

  update(unitId: number, updateUnitDto: UpdateUnitDto) {
    return `This action updates a #${unitId} unit`;
  }

  remove(unitId: number) {
    return `This action removes a #${unitId} unit`;
  }
}
