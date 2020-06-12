import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GithubClient } from './github.client';
import { GithubUser } from './github.interface';

@Injectable()
export class GithubService {
  constructor(private readonly githubClient: GithubClient) {}

  getUser(username: string): Observable<GithubUser> {
    return this.githubClient.getUser(username).pipe(map(res => res.data));
  }
}
