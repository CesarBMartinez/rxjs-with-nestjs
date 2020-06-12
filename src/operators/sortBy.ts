import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export default function sortBy(order: string, key: string): any {
  return pipe(
    switchMap((arr: unknown[]) =>
      arr.sort((a, b) => {
        if (order === 'DESC') {
          return b[key] - a[key];
        }
        return a[key] - b[key];
      }),
    ),
  );
}
