import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExplanationsService } from '../domain/explanations.service';
import { CreateExplanationDto } from '../dto/create-explanation.dto';
import { UpdateExplanationDto } from '../dto/update-explanation.dto';

@Controller('api/v1/explanations')
export class ExplanationsController {
  constructor(private readonly explanationsService: ExplanationsService) {}

  @Post()
  create(@Body() createExplanationDto: CreateExplanationDto) {
    return this.explanationsService.create(createExplanationDto);
  }

  @Get()
  async findAll() {
    return {
      explanations: await this.explanationsService.findAll(),
    };
  }

  @Get(':explanationId')
  async findOne(@Param('explanationId') explanationId: string) {
    return {
      explanation: await this.explanationsService.findOne(+explanationId),
    };
  }

  @Patch(':explanationId')
  update(
    @Param('explanationId') explanationId: string,
    @Body() updateExplanationDto: UpdateExplanationDto,
  ) {
    return this.explanationsService.update(
      +explanationId,
      updateExplanationDto,
    );
  }

  @Delete(':explanationId')
  remove(@Param('explanationId') explanationId: string) {
    return this.explanationsService.remove(+explanationId);
  }
}
