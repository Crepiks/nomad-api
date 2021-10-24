import { Injectable, NotFoundException } from '@nestjs/common';
import { Explanation } from 'src/common/entities/explanation';
import { ExplanationsRepository } from '../data/explanations.repository';
import { CreateExplanationDto } from '../dto/create-explanation.dto';
import { UpdateExplanationDto } from '../dto/update-explanation.dto';

@Injectable()
export class ExplanationsService {
  constructor(
    private readonly explanationsRepository: ExplanationsRepository,
  ) {}

  create(createExplanationDto: CreateExplanationDto) {
    return 'This action adds a new explanation';
  }

  findAll(): Promise<Explanation[]> {
    return this.explanationsRepository.findAll();
  }

  async findOne(explanationId: number): Promise<Explanation> {
    const explanation = await this.explanationsRepository.findById(
      explanationId,
    );
    if (!explanation) {
      throw new NotFoundException('Explanation not found');
    }

    return explanation;
  }

  update(id: number, updateExplanationDto: UpdateExplanationDto) {
    return `This action updates a #${id} explanation`;
  }

  remove(id: number) {
    return `This action removes a #${id} explanation`;
  }
}
