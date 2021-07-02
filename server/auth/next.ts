import { Request, Response } from 'express';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
};

// @ts-ignore we are using next-auth outside of nextjs. typically, it expects NextApiRequest, NextApiResponse
const NextHandler = (req: Request, res: Response) => NextAuth(req, res, options);

export default NextHandler;
