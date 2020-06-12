import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';
import { GithubUser } from './github.interface';

@Controller('github')
export class GithubController {
  constructor(private readonly productsService: GithubService) {}

  @Get('users/:user')
  getUser(@Param('user') username: string): Observable<GithubUser> {
    return this.productsService.getUser(username);
  }
}
