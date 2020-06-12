import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('sales/:product')
  getSalesByProduct(@Param('product') product: string): Observable<any[]> {
    return this.productsService.getSalesByProduct(product);
  }
}
