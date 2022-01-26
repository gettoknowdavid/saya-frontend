import React from 'react';
import App, { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import { BaseProvider } from 'baseui';
import { Provider } from 'react-redux';
import { fetchAPI } from '@lib/api';
import { useRouter } from 'next/router';
import { Spinner } from '@molecules/spinner';
import { sayaStore } from '@redux/store';
import { GlobalQuery } from '@graphql/queries/global.query';
import { getSettings } from '@redux/slices/global.slice';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SessionProvider } from 'next-auth/react';
import THEME from '../theme';
import styletron from '../styletron';
import 'normalize.css';
import '../styles/globals.css';

export default function SayaApp({ Component, pageProps }: AppProps) {
  const { initialApolloState, initialReduxState, session } = pageProps;
  const client = useApollo(initialApolloState);
  const store = sayaStore(initialReduxState);
  const persistor = persistStore(store);
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = (url) => {
      // eslint-disable-next-line no-unused-expressions
      if (!router.pathname.includes('account')) {
        // eslint-disable-next-line no-unused-expressions
        url !== router.pathname ? setLoading(true) : setLoading(false);
      }
    };

    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <StyletronProvider value={styletron}>
              <BaseProvider theme={THEME}>
                {loading ? <Spinner /> : null}
                <Component {...pageProps} />
              </BaseProvider>
            </StyletronProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

SayaApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  const store = sayaStore({});
  const { dispatch } = store;

  const { data: { global } } = await fetchAPI({ query: GlobalQuery });
  // @ts-ignore
  dispatch(getSettings(global), { payload: global });

  return { ...appProps, pageProps: { initialReduxState: store.getState() } };
};
