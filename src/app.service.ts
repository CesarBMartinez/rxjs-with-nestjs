import { Injectable } from '@nestjs/common';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  getLongRequest(): Observable<string> {
    return of('Done').pipe(
      delay(5000),
      tap(() => console.log('Finished Long Request')),
    );
  }
}
