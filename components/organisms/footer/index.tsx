import React from 'react';
import { useStyletron } from 'baseui';
import { Container } from '@atoms/container';
import { Block } from 'baseui/block';
import Link from 'next/link';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Image from 'next/image';
import {
  StyledFooter, StyledFooterList,
  StyledFooterListHeading,
  StyledFooterListItem, StyledFooterMainText,
  StyledFooterSocialLink, StyledFooterSocialList, StyledFooterSubText,
} from '@organisms/footer/footer.styles';

export function Footer() {
  const [css, theme] = useStyletron();

  return (
    <StyledFooter>
      <Container paddingTop="20px" paddingBottom="50px">
        <FlexGrid flexGridColumnCount={[1, 1, 3, 5]} flexGridRowGap={['40px', '40px', '40px', '0px']}>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '48%']}>
            <Block className={css({
              display: 'block',
              [theme.mediaQuery.small]: { textAlign: 'center', marginBottom: '50px' },
              [theme.mediaQuery.medium]: { textAlign: 'center', marginBottom: '50px' },
              [theme.mediaQuery.large]: { textAlign: 'left', marginBottom: '0px' },
            })}
            >
              <StyledFooterMainText>
                Need help
                <br />
                with anything?
              </StyledFooterMainText>
              <StyledFooterSubText>
                {'Let\'s hear about it!  '}
                <span className={css({
                  textDecoration: 'underline',
                  ':hover': { textDecoration: 'none' },
                })}
                >
                  <Link href="/contact" passHref>Contact Us</Link>
                </span>
              </StyledFooterSubText>
            </Block>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <StyledFooterList>
              <StyledFooterListHeading>Menu</StyledFooterListHeading>
              <ul>
                <StyledFooterListItem>About Us</StyledFooterListItem>
                <StyledFooterListItem>History</StyledFooterListItem>
              </ul>
            </StyledFooterList>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <StyledFooterList>
              <StyledFooterListHeading>Product</StyledFooterListHeading>
              <ul>
                <StyledFooterListItem>Categories</StyledFooterListItem>
                <StyledFooterListItem>Pricing</StyledFooterListItem>
                <StyledFooterListItem>Testimonials</StyledFooterListItem>
              </ul>
            </StyledFooterList>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <StyledFooterList>
              <StyledFooterListHeading>Discover</StyledFooterListHeading>
              <ul>
                <StyledFooterListItem>Customer</StyledFooterListItem>
                <StyledFooterListItem>Privacy</StyledFooterListItem>
                <StyledFooterListItem>{'FAQ\'s'}</StyledFooterListItem>
              </ul>
            </StyledFooterList>
          </FlexGridItem>
          <FlexGridItem maxWidth={['100%', '100%', '100%', '13%']}>
            <StyledFooterList>
              <StyledFooterListHeading>Follow us</StyledFooterListHeading>
              <StyledFooterSocialList>
                <StyledFooterSocialLink>
                  <Link href="/" passHref>
                    <Block display="flex" alignItems="center" justifyContent="center">
                      <Image src="/facebook.png" height="16px" width="16px" alt="Facebook" />
                    </Block>
                  </Link>
                </StyledFooterSocialLink>
                <StyledFooterSocialLink>
                  <Link href="/" passHref>
                    <Block display="flex" alignItems="center" justifyContent="center">
                      <Image src="/instagram.png" height="16px" width="16px" alt="Instagram" />
                    </Block>
                  </Link>
                </StyledFooterSocialLink>
                <StyledFooterSocialLink>
                  <Link href="/" passHref>
                    <Block display="flex" alignItems="center" justifyContent="center">
                      <Image src="/twitter.png" height="16px" width="16px" alt="Twitter" />
                    </Block>
                  </Link>
                </StyledFooterSocialLink>
              </StyledFooterSocialList>
            </StyledFooterList>
          </FlexGridItem>
        </FlexGrid>
      </Container>
      <Block backgroundColor="accent">
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
    </StyledFooter>
  );
}
