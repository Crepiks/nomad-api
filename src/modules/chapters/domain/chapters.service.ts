import { Injectable, NotFoundException } from '@nestjs/common';
import { Chapter } from 'src/common/entities/chapter';
import { ChaptersRepository } from '../data/chapters.repository';
import { CreateChapterDto } from '../dto/create-chapter.dto';
import { UpdateChapterDto } from '../dto/update-chapter.dto';

@Injectable()
export class ChaptersService {
  constructor(private readonly chaptersRepository: ChaptersRepository) {}

  create(createChapterDto: CreateChapterDto) {
    return 'This action adds a new chapter';
  }

  findAll(): Promise<Chapter[]> {
    return this.chaptersRepository.findAll();
  }

  async findOne(chapterId: number): Promise<Chapter> {
    const chapter = await this.chaptersRepository.findById(chapterId);
    if (!chapter) {
      throw new NotFoundException('Chapter not found');
    }

    return chapter;
  }

  update(chapterId: number, updateChapterDto: UpdateChapterDto) {
    return `This action updates a #${chapterId} chapter`;
  }

  remove(chapterId: number) {
    return `This action removes a #${chapterId} chapter`;
  }
}
