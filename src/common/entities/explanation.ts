import { Unit } from './unit';

export class Explanation {
  id: number;
  content: string;
  updatedAt?: string;
  createdAt: string;
  deletedAt?: string;
  unitId: number;
  unit?: Unit;
}
