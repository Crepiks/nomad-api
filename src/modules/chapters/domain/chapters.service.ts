import { Injectable } from '@nestjs/common';
import { ChaptersRepository } from '../data/chapters.repository';
import { CreateChapterDto } from '../dto/create-chapter.dto';
import { UpdateChapterDto } from '../dto/update-chapter.dto';

@Injectable()
export class ChaptersService {
  constructor(private readonly chaptersRepository: ChaptersRepository) {}

  create(createChapterDto: CreateChapterDto) {
    return 'This action adds a new chapter';
  }

  findAll() {
    return this.chaptersRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} chapter`;
  }

  update(id: number, updateChapterDto: UpdateChapterDto) {
    return `This action updates a #${id} chapter`;
  }

  remove(id: number) {
    return `This action removes a #${id} chapter`;
  }
}
