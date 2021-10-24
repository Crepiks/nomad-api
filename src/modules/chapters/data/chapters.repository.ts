import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChapterDao } from 'src/common/dao/chapter.dao';
import { Chapter } from 'src/common/entities/chapter';

@Injectable()
export class ChaptersRepository {
  constructor(
    @InjectRepository(ChapterDao)
    private readonly chaptersRepository: Repository<ChapterDao>,
  ) {}

  async findAll(): Promise<Chapter[]> {
    const chapters = await this.chaptersRepository.find();
    return chapters.map(this.mapChapterDaoToEntity);
  }

  async findById(chapterId: number): Promise<Chapter> {
    const chapter = await this.chaptersRepository.findOne(chapterId);
    if (!chapter) {
      return null;
    }

    return this.mapChapterDaoToEntity(chapter);
  }

  private mapChapterDaoToEntity(chapter: ChapterDao): Chapter {
    return {
      id: chapter.id,
      name: chapter.name,
      updatedAt: chapter.updatedAt,
      createdAt: chapter.createdAt,
      deletedAt: chapter.deletedAt,
      bookId: chapter.bookId,
      book: chapter.book,
    };
  }
}
