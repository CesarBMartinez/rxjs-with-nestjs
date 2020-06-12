import { Module, HttpModule } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';
import { GithubClient } from './github.client';

@Module({
  imports: [HttpModule],
  controllers: [GithubController],
  providers: [GithubService, GithubClient],
})
export class GithubModule {}
