import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from 'src/common/entities/task';
import { TasksRepository } from '../data/tasks.repository';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.findAll();
  }

  async findOne(taskId: number) {
    const task = await this.tasksRepository.findById(taskId);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  update(taskId: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${taskId} task`;
  }

  remove(taskId: number) {
    return `This action removes a #${taskId} task`;
  }
}
