import { Injectable } from '@nestjs/common';
import pg from 'pg';
import { createBetterAuthService } from './lib/auth.js';

const { Pool } = pg;

@Injectable()
export class BetterAuthService {
  public auth: any;

  constructor() {
    createBetterAuthService(
      {
        database: new Pool({
          connectionString: process.env.DB_URL,
        }),
        trustedOrigins: ['*'],
        advanced: {
          disableCSRFCheck: true,
        },
      },
      (auth) => {
        this.auth = auth;
        console.log(this.auth)
      },
    );
  }
}
