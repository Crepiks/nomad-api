import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExplanationDao } from 'src/common/dao/explanation.dao';
import { Explanation } from 'src/common/entities/explanation';
import { Repository } from 'typeorm';

@Injectable()
export class ExplanationsRepository {
  constructor(
    @InjectRepository(ExplanationDao)
    private readonly explanationsRepository: Repository<ExplanationDao>,
  ) {}

  async findAll(): Promise<Explanation[]> {
    const explanations = await this.explanationsRepository.find();
    return explanations.map(this.mapExplanationDaoToEntity);
  }

  async findById(explanationId: number): Promise<Explanation> {
    const explanation = await this.explanationsRepository.findOne(
      explanationId,
    );
    if (!explanation) {
      return null;
    }

    return this.mapExplanationDaoToEntity(explanation);
  }

  private mapExplanationDaoToEntity(explanation: ExplanationDao): Explanation {
    return {
      id: explanation.id,
      content: explanation.content,
      updatedAt: explanation.updatedAt,
      createdAt: explanation.createdAt,
      deletedAt: explanation.deletedAt,
      unitId: explanation.unitId,
      unit: explanation.unit,
    };
  }
}
