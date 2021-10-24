import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterDao } from 'src/common/dao/chapter.dao';
import { ChaptersRepository } from './data/chapters.repository';
import { ChaptersService } from './domain/chapters.service';
import { ChaptersController } from './presenter/chapters.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChapterDao])],
  controllers: [ChaptersController],
  providers: [ChaptersService, ChaptersRepository],
})
export class ChaptersModule {}
