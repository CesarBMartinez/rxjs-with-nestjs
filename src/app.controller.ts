import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { OnCloseInterceptor } from './interceptors/on-close.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('long-request')
  @UseInterceptors(OnCloseInterceptor)
  longRequest(): Observable<string> {
    return this.appService.getLongRequest();
  }
}
