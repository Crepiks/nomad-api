import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskDao } from 'src/common/dao/task.dao';
import { TasksRepository } from './data/tasks.repository';
import { TasksService } from './domain/tasks.service';
import { TasksController } from './presenter/tasks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TaskDao])],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
