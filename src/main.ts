import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Register a global interceptor
  // app.useGlobalInterceptors(new OnCloseInterceptor());
  await app.listen(3000);
}
bootstrap();
