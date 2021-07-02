import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
import { Router } from 'express';
import { IncomingMessage, ServerResponse } from 'http';
import NextAuth, { NextAuthOptions } from 'next-auth';

/**
 * Should match one of the following:
 * /api/auth/signin
 * /api/auth/signin/:provider
 * /api/auth/callback/:provider
 * /api/auth/signout
 * /api/auth/session
 * /api/auth/csrf
 * /api/auth/providers
 * /api/auth/_log
 *
 * See: https://next-auth.js.org/getting-started/rest-api
 */
const authActions =
  /^\/api\/auth\/(session|signin\/?\w*|signout|csrf|providers|callback\/\w+|_log)$/;

const router = Router();

/** Wraps `next-auth` so  */
export default function NextAuthMiddleware(options: NextAuthOptions) {
  return router
    .use(urlencoded({ extended: false }))
    .use(json())
    .use(cookieParser())
    .all(authActions, (req: IncomingMessage, res: ServerResponse, next) => {
      const authActions = ['session', 'signin', 'signout', 'callback', '_log'];
      //@ts-ignore
      if (authActions.some((action) => req.path.includes(action))) {
        //@ts-ignore
        req.query.nextauth = req.path.split('/').slice(3);
        //@ts-ignore
        NextAuth(req, res, options);
        return;
      }
      next();
    });
}
