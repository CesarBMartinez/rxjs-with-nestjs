import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AxiosResponse, AxiosError } from 'axios';
import { GithubUser } from './github.interface';

@Injectable()
export class GithubClient {
  private readonly GITHUB_API: string = 'https://api.github.com';

  constructor(private httpService: HttpService) {}

  getUser(username: string): Observable<AxiosResponse> {
    return this.httpService
      .get<GithubUser>(`${this.GITHUB_API}/users/${username}`)
      .pipe(
        map(response => response),
        catchError((error: AxiosError) => {
          return throwError(
            new HttpException(
              error.response.data.message,
              error.response.status,
            ),
          );
        }),
      );
  }
}
