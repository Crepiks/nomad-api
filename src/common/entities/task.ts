import { Unit } from './unit';

export class Task {
  id: number;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
  unitId: number;
  unit?: Unit;
}
