/* eslint-disable import/no-anonymous-default-export */
import NextAuth, { NextAuthOptions } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import Credentials from 'next-auth/providers/credentials';
import { postAPI } from '@lib/api';
import { LoginMutation, LoginVariables } from '@graphql/mutations/login.mutation';

const options = {
  providers: [
    Credentials({
      name: 'Saya',
      credentials: {
        email: { type: 'text', label: 'Email' },
        password: { type: 'password', label: 'Password' },
      },
      async authorize<C>(credentials: Record<keyof C, string> | undefined) {
        const { data } = await postAPI({
          mutation: LoginMutation,
          variables: LoginVariables({
            params: { ...credentials },
          }),
        });

        if (data) {
          return data;
        }

        return undefined;
      },
    }),
  ],
  session: { jwt: true },
  jwt: {
    secret: process.env.JWT_SECRET,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    signIn: async () => {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      }
      // Return false to display a default error message
      return false;
    },
    redirect: async ({ url, baseUrl }) => (url.startsWith(baseUrl) ? url : baseUrl),
    session: async ({ session, token }) => {
      session.jwt = token.jwt;
      session.user = token.user;
      await session;
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.jwt = user.jwt;
        token.user = user.user;
      }
      await token;
      return token;
    },
  },
  debug: process.env.NODE_ENV !== 'production',
  pages: {
    signIn: '/account/login',
    error: '/account/login',
  },
} as NextAuthOptions;

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
