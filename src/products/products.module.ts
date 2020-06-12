import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsClient } from './client/products.client';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsClient],
})
export class ProductsModule {}
