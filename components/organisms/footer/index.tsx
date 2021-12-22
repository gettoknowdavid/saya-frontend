import React from 'react';
import { useStyletron } from 'baseui';
import { Container } from '@atoms/container';
import { Block } from 'baseui/block';
import Link from 'next/link';

function Footer() {
  const [css, theme] = useStyletron();

  return (
    <footer className={css({
      marginBottom: '0',
    })}
    >
      <Container paddingTop="20px" paddingBottom="20px">
        Top Footer
      </Container>
      <Block className={css({
        backgroundColor: theme.colors.accent,
      })}
      >
        <Container
          paddingTop="20px"
          paddingBottom="20px"
          className={css({ textAlign: 'center', fontSize: '14px' })}
        >
          &#169; 2021 Copyright
          {' '}
          <span className={css({
            fontWeight: '600',
            ':hover': { textDecoration: 'underline' },
          })}
          >
            <Link href="/" passHref>Saya.co</Link>
          </span>
        </Container>
      </Block>
    </footer>
  );
}

export default Footer;
