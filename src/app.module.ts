import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [ProductsModule, GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
