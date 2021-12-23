import React from 'react';
import { useStyletron } from 'baseui';
import { Container } from '@atoms/container';
import { Block } from 'baseui/block';
import Link from 'next/link';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Image from 'next/image';
import {
  StyledFooterListHeading,
  StyledFooterListItem,
  StyledFooterSocialLink,
} from '@organisms/footer/footer.styles';

function Footer() {
  const [css, theme] = useStyletron();

  return (
    <footer className={css({
      marginBottom: '0',
      color: theme.colors.accent700,
      [theme.mediaQuery.small]: {
        paddingTop: '40px',
        paddingBottom: '0',
      },
      [theme.mediaQuery.medium]: {
        paddingTop: '50px',
        paddingBottom: '0',
      },
      [theme.mediaQuery.large]: {
        paddingTop: '100px',
        paddingBottom: '0',
      },
    })}
    >
      <Container paddingTop="20px" paddingBottom="50px">
        <FlexGrid flexGridColumnCount={[1, 1, 1, 5]}>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '48%']}>
            <Block>
              <h1 className={css({
                fontFamily: 'Bodoni MT',
                fontSize: '62px',
                lineHeight: '64px',
                marginTop: '0',
                marginBottom: '40px',
              })}
              >
                Need help
                <br />
                with anything?
              </h1>
              <p className={css({
                color: theme.colors.accent200,
                fontSize: theme.typography.ParagraphMedium.fontSize,
                fontWeight: '300',
              })}
              >
                {'Let\'s hear about it!  '}
                <span className={css({
                  textDecoration: 'underline',
                  ':hover': {
                    textDecoration: 'none',
                  },
                })}
                >
                  <Link href="/contact" passHref>Contact Us</Link>
                </span>
              </p>
            </Block>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <Block>
              <StyledFooterListHeading>Menu</StyledFooterListHeading>
              <ul>
                <StyledFooterListItem>About Us</StyledFooterListItem>
                <StyledFooterListItem>History</StyledFooterListItem>
              </ul>
            </Block>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <Block>
              <StyledFooterListHeading>Product</StyledFooterListHeading>
              <ul>
                <StyledFooterListItem>Categories</StyledFooterListItem>
                <StyledFooterListItem>Pricing</StyledFooterListItem>
                <StyledFooterListItem>Testimonials</StyledFooterListItem>
              </ul>
            </Block>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <Block>
              <StyledFooterListHeading>Discover</StyledFooterListHeading>
              <ul>
                <StyledFooterListItem>Customer</StyledFooterListItem>
                <StyledFooterListItem>Privacy</StyledFooterListItem>
                <StyledFooterListItem>{'FAQ\'s'}</StyledFooterListItem>
              </ul>
            </Block>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <Block>
              <StyledFooterListHeading>Follow us</StyledFooterListHeading>
              <ul className={css({ display: 'flex' })}>
                <StyledFooterSocialLink>
                  <Link href="/" passHref>
                    <Image src="/facebook.png" height="16px" width="16px" alt="Facebook" />
                  </Link>
                </StyledFooterSocialLink>
                <StyledFooterSocialLink>
                  <Link href="/" passHref>
                    <Image src="/instagram.png" height="16px" width="16px" alt="Instagram" />
                  </Link>
                </StyledFooterSocialLink>
                <StyledFooterSocialLink>
                  <Link href="/" passHref>
                    <Image src="/twitter.png" height="16px" width="16px" alt="Twitter" />
                  </Link>
                </StyledFooterSocialLink>
              </ul>
            </Block>
          </FlexGridItem>
        </FlexGrid>
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
