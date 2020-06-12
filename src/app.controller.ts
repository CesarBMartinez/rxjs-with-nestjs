import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('long-request')
  longRequest(): Observable<number> {
    return this.appService.getLongRequest();
  }
}
