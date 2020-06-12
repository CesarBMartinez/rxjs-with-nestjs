import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ProductsClient } from './client/products.client';
import {
  filter,
  toArray,
  throwIfEmpty,
  switchMap,
  take,
  map,
} from 'rxjs/operators';
import sortBy from '../operators/sortBy';

@Injectable()
export class ProductsService {
  constructor(private readonly productsClient: ProductsClient) {}

  getSalesByProduct(product: string): Observable<any[]> {
    return this.productsClient.getSales().pipe(
      switchMap(res => res.data),
      filter(item => item.product === product),
      throwIfEmpty(() => new NotFoundException()),
      toArray(),
    );
  }

  getSales(order: string, limit: number): Observable<any> {
    return this.productsClient.getSales().pipe(
      map(res => res.data),
      sortBy(order, 'financedAmount'),
      take(limit),
      toArray(),
    );
  }
}
