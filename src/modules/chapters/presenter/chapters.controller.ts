import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChaptersService } from '../domain/chapters.service';
import { CreateChapterDto } from '../dto/create-chapter.dto';
import { UpdateChapterDto } from '../dto/update-chapter.dto';

@Controller('api/v1/chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Post()
  create(@Body() createChapterDto: CreateChapterDto) {
    return this.chaptersService.create(createChapterDto);
  }

  @Get()
  async findAll() {
    return {
      chapters: await this.chaptersService.findAll(),
    };
  }

  @Get(':chapterId')
  async findOne(@Param('chapterId') chapterId: string) {
    return {
      chapter: await this.chaptersService.findOne(+chapterId),
    };
  }

  @Patch(':chapterId')
  update(
    @Param('chapterId') chapterId: string,
    @Body() updateChapterDto: UpdateChapterDto,
  ) {
    return this.chaptersService.update(+chapterId, updateChapterDto);
  }

  @Delete(':chapterId')
  remove(@Param('chapterId') chapterId: string) {
    return this.chaptersService.remove(+chapterId);
  }
}
