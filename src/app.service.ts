import { Injectable } from '@nestjs/common';
import { Observable, interval } from 'rxjs';
import { tap, take, finalize } from 'rxjs/operators';

@Injectable()
export class AppService {
  getLongRequest(): Observable<number> {
    // Emit value in sequence every X ms
    const source = interval(500);

    return source.pipe(
      take(6),
      tap(index => console.log(index + 1)),
      finalize(() => console.log('Finished Long Request')),
    );
  }
}
