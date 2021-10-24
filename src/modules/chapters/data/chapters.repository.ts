import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChapterDao } from 'src/common/dao/chapter.dao';
import { Repository } from 'typeorm';

@Injectable()
export class ChaptersRepository {
  constructor(
    @InjectRepository(ChapterDao)
    private readonly chaptersRepository: Repository<ChapterDao>,
  ) {}

  async findAll() {
    const chapters = await this.chaptersRepository.find();
    console.log(chapters);
    return chapters;
  }
}
