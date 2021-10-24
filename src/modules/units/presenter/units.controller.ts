import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnitsService } from '../domain/units.service';
import { CreateUnitDto } from '../dto/create-unit.dto';
import { UpdateUnitDto } from '../dto/update-unit.dto';

@Controller('api/v1/units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  create(@Body() createUnitDto: CreateUnitDto) {
    return this.unitsService.create(createUnitDto);
  }

  @Get()
  async findAll() {
    return {
      units: await this.unitsService.findAll(),
    };
  }

  @Get(':unitId')
  async findOne(@Param('unitId') unitId: string) {
    return {
      unit: await this.unitsService.findOne(+unitId),
    };
  }

  @Patch(':unitId')
  update(
    @Param('unitId') unitId: string,
    @Body() updateUnitDto: UpdateUnitDto,
  ) {
    return this.unitsService.update(+unitId, updateUnitDto);
  }

  @Delete(':unitId')
  remove(@Param('unitId') unitId: string) {
    return this.unitsService.remove(+unitId);
  }
}
