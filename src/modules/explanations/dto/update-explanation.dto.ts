import { PartialType } from '@nestjs/mapped-types';
import { CreateExplanationDto } from './create-explanation.dto';

export class UpdateExplanationDto extends PartialType(CreateExplanationDto) {}
