import { BetterAuthService } from '../better-auth.service.js';
import { BetterAuthOptions } from 'better-auth';

export function createBetterAuthService(
  options: BetterAuthOptions,
  callback: (auth: any) => void,
) {
  import('better-auth').then((betterAuth) => {
    const auth = betterAuth.betterAuth({
      ...options,
    });
    callback(auth);
  });
}

export async function toNestJsController(
  authService: BetterAuthService,
  request: Request,
  response: Response,
) {
  if (!authService.auth) {
    throw new Error('No better-auth service instance');
  }

  const { toNodeHandler } = await import('better-auth/node');

  try {
    const authHandler = toNodeHandler(authService.auth);
    return authHandler(request as any, response as any);
  } catch {
    throw new Error('better-auth handler failed');
  }
}
