import { NestFactory } from '@nestjs/core';
import { BetterAuthModule } from './better-auth.module.js';

async function bootstrap() {
  const app = await NestFactory.create(BetterAuthModule);
  await app.listen(3000);
}
bootstrap();
