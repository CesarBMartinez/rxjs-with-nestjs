import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('sales/:product')
  getSalesByProduct(@Param('product') product: string): Observable<any[]> {
    return this.productsService.getSalesByProduct(product);
  }

  @Get('sales')
  getSales(
    @Query('order') order = 'ASC',
    @Query('limit') limit = 3,
  ): Observable<any[]> {
    return this.productsService.getSales(order, limit);
  }
}
