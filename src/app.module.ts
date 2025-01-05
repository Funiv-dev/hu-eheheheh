import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'root123',
      database: 'cms_solution',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule {}
