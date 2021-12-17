import React from 'react';
import 'normalize.css';
import '../styles/globals.css';
import App, { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import { BaseProvider } from 'baseui';
import styletron from '../styletron';
import THEME from '../theme';

export default function SayaApp({ Component, pageProps }: AppProps) {
  const { initialApolloState } = pageProps;
  const client = useApollo(initialApolloState);

  return (
    <ApolloProvider client={client}>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={THEME}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </ApolloProvider>
  );
}

SayaApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  return { ...appProps };
};
