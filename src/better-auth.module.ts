import { Module } from '@nestjs/common';
import { BetterAuthController } from './better-auth.controller.js';
import { BetterAuthService } from './better-auth.service.js';

@Module({
  imports: [],
  controllers: [BetterAuthController],
  providers: [BetterAuthService],
  exports: [BetterAuthService],
})
export class BetterAuthModule {}
