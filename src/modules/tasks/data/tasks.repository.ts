import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDao } from 'src/common/dao/task.dao';
import { Task } from 'src/common/entities/task';
import { Repository } from 'typeorm';

@Injectable()
export class TasksRepository {
  constructor(
    @InjectRepository(TaskDao)
    private readonly tasksRepository: Repository<TaskDao>,
  ) {}

  async findAll(): Promise<Task[]> {
    const tasks = await this.tasksRepository.find();
    return tasks.map(this.mapTaskDaoToEntity);
  }

  async findById(taskId: number): Promise<Task> {
    const task = await this.tasksRepository.findOne(taskId);
    if (!task) {
      return null;
    }

    return this.mapTaskDaoToEntity(task);
  }

  private mapTaskDaoToEntity(task: TaskDao): Task {
    return {
      id: task.id,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
      deletedAt: task.deletedAt,
      unitId: task.unitId,
      unit: task.unit,
    };
  }
}
