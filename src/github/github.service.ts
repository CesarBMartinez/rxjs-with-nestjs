import { Injectable } from '@nestjs/common';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap, toArray, flatMap } from 'rxjs/operators';

import { GithubClient } from './github.client';
import { GithubUser } from './github.interface';

@Injectable()
export class GithubService {
  constructor(private readonly githubClient: GithubClient) {}

  getUser(username: string): Observable<GithubUser> {
    return this.githubClient
      .getUser(username.trim())
      .pipe(map(res => res.data));
  }

  getUsers(users: string): Observable<GithubUser[]> {
    const observables = users.split(',').map(user => {
      return this.githubClient.getUser(user.trim()).pipe(map(res => res.data));
    });

    return forkJoin(observables);
  }
}
