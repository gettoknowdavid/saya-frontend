import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { getCsrfToken, getSession, signIn } from 'next-auth/react';
import { Container } from '@atoms/container';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import { FormInput } from '@atoms/form-input';
import { FormControl } from '@atoms/form-control';
import { VerticalSpacer } from '@atoms/spacer';
import { Button } from 'baseui/button';
import { HeadingSmall, ParagraphXSmall } from 'baseui/typography';
import { useRouter } from 'next/router';
import { BounceLoader } from 'react-spinners';
import { Block } from 'baseui/block';
import { SeoInterface } from '../../types';
import Layout from '../../layout';
import THEME from '../../theme';

type Props = { csrfToken: string }

const seo = {
  metaTitle: 'Login',
  metaDescription: 'Login to Your Saya Account',
} as SeoInterface;

function Login({ csrfToken }: Props) {
  const [css, theme] = useStyletron();
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [callbackUrl, setCallbackUrl] = React.useState('');
  const [loginError, setLoginError] = useState('');
  const [displayError, setDisplayError] = useState(false);

  React.useEffect(() => {
    if (router.query.callbackUrl) {
      const newUrl = router.query.callbackUrl.slice(21);
      setCallbackUrl(newUrl.toString());
    } else {
      setCallbackUrl('/account');
    }
  }, [router.query.callbackUrl]);

  const onEmailChange = (e) => {
    setEmailError('');
    setDisplayError(false);
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e) => {
    setPasswordError('');
    setDisplayError(false);
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email && password) {
      signIn('credentials', { email, password, redirect: false }).then((res) => {
        console.log(res);
        if (!res.error) {
          router.push(callbackUrl);
        } else {
          setLoading(false);
          setLoginError(res.error.replace('identifier', 'email'));
          setDisplayError(true);
        }
      });
    } else {
      setLoading(false);
      setDisplayError(false);
      setEmailError('This field cannot be empty');
      setPasswordError('This field cannot be empty');
    }
  };

  // @ts-ignore
  return (
    <Layout seo={seo}>
      <Container paddingTop={['60px', '60px', '70px', '80px']} paddingBottom={['60px', '60px', '70px', '80px']}>
        <FlexGrid
          flexGridColumnCount={[1, 1, 2, 2]}
          flexGridColumnGap={['0px', '0px', '0px', '0px']}
          flexGridRowGap={['20px', '20px', '20px', '0px']}
        >
          <FlexGridItem>s</FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '35%']}>
            <div className={css({
              borderRadius: '16px',
              backgroundColor: '#565CBA',
              paddingBlock: '26px',
              paddingInline: '20px',
              minHeight: '460px',
              position: 'relative',
            })}
            >
              {loading ? (
                <div
                  className={css({
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '16px',
                    opacity: '0.7',
                    backgroundColor: theme.colors.mono1000,
                  })}
                >
                  <BounceLoader color={THEME.colors.accent} loading size={60} />
                </div>
              ) : null }
              <Block>
                <HeadingSmall marginTop="26px" marginBottom="6px" color="mono200">Login to Your Account</HeadingSmall>
                <Block display={displayError ? 'flex' : 'none'}>
                  <ParagraphXSmall marginTop={0} color="red">{loginError}</ParagraphXSmall>
                </Block>
                <VerticalSpacer height={14} />
                <form onSubmit={handleSubmit} method="post" action="/api/auth/callback/credentials">
                  <FormControl label="Your Email" error={emailError} htmlFor="email">
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      value={email}
                      error={email === null}
                      onChange={onEmailChange}
                    />
                  </FormControl>
                  <VerticalSpacer />
                  <FormControl label="Your Password" error={passwordError} htmlFor="password">
                    <FormInput
                      name="password"
                      type="password"
                      placeholder="type in your password"
                      value={password}
                      error={password === null}
                      onChange={onPasswordChange}
                    />
                  </FormControl>
                  <VerticalSpacer height={45} />
                  <Button
                    type="submit"
                    overrides={{
                      BaseButton: {
                        style: ({ $theme }) => ({
                          paddingRight: '40px',
                          paddingLeft: '40px',
                          color: $theme.colors.mono200,
                          backgroundColor: '#4EE1C1',
                          borderTopRightRadius: '8px',
                          borderBottomRightRadius: '8px',
                          borderBottomLeftRadius: '8px',
                          borderTopLeftRadius: '8px',
                          width: '100%',
                          ':hover': {
                            backgroundColor: '#4ac2ab',
                            boxShadow: $theme.lighting.shadow600,
                          },
                        }),
                      },
                    }}
                  >
                    Login
                  </Button>
                  <VerticalSpacer />
                </form>
              </Block>

            </div>
          </FlexGridItem>
        </FlexGrid>
      </Container>
    </Layout>
  );
}

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context);
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        source: '/account',
        destination: '/account/login',
        permanent: false,
      },
    };
  }

  return { props: { csrfToken, session } };
};
