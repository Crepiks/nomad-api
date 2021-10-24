import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import databaseConfig from 'src/common/config/database.config';
import { UserDao } from 'src/common/dao/user.dao';
import { BookDao } from 'src/common/dao/book.dao';
import { ChaptersModule } from './chapters/chapters.module';
import { ChapterDao } from 'src/common/dao/chapter.dao';

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
      entities: [UserDao, BookDao, ChapterDao],
    }),
    UsersModule,
    BooksModule,
    ChaptersModule,
  ],
})
export class AppModule {}
