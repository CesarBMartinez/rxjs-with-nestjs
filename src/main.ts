import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OnCloseInterceptor } from './interceptors/on-close.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Register a global interceptor
  app.useGlobalInterceptors(new OnCloseInterceptor());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
