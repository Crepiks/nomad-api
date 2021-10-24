import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import databaseConfig from 'src/common/config/database.config';
import { UserDao } from 'src/common/dao/user.dao';
import { BookDao } from 'src/common/dao/book.dao';
import { ChaptersModule } from './chapters/chapters.module';
import { ChapterDao } from 'src/common/dao/chapter.dao';
import { UnitsModule } from './units/units.module';
import { UnitDao } from 'src/common/dao/unit.dao';
import { ExplanationsModule } from './explanations/explanations.module';
import { ExplanationDao } from 'src/common/dao/explanation.dao';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.name,
      synchronize: false,
      entities: [UserDao, BookDao, ChapterDao, UnitDao, ExplanationDao],
    }),
    UsersModule,
    BooksModule,
    ChaptersModule,
    UnitsModule,
    ExplanationsModule,
  ],
})
export class AppModule {}
