import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ProductsClient } from './client/products.client';
import { filter, toArray, throwIfEmpty, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  constructor(private readonly productsClient: ProductsClient) {}

  getSalesByProduct(product: string): Observable<any[]> {
    return this.productsClient.getSales().pipe(
      mergeMap(res => res.data),
      filter(item => item.product === product),
      throwIfEmpty(() => new NotFoundException()),
      toArray(),
    );
  }
}
