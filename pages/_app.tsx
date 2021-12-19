import React from 'react';
import 'normalize.css';
import '../styles/globals.css';
import App, { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import { BaseProvider } from 'baseui';
import { Provider } from 'react-redux';
import styletron from '../styletron';
import THEME from '../theme';
import { sayaStore } from '../redux/store';

export default function SayaApp({ Component, pageProps }: AppProps) {
  const { initialApolloState, initialReduxState } = pageProps;
  const client = useApollo(initialApolloState);
  const store = sayaStore(initialReduxState);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <StyletronProvider value={styletron}>
          <BaseProvider theme={THEME}>
            <Component {...pageProps} />
          </BaseProvider>
        </StyletronProvider>
      </ApolloProvider>
    </Provider>
  );
}

SayaApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const store = sayaStore({});
  // const { dispatch } = store;

  return { ...appProps, pageProps: { initialReduxState: store.getState() } };
};
