import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} unit`;
  }

  update(id: number, updateUnitDto: UpdateUnitDto) {
    return `This action updates a #${id} unit`;
  }

  remove(id: number) {
    return `This action removes a #${id} unit`;
  }
}
