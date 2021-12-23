import { styled } from 'baseui';

export const StyledFooter = styled('footer', ({ $theme }) => ({
  marginBottom: '0',
  color: $theme.colors.accent700,
  [$theme.mediaQuery.small]: {
    paddingTop: '40px',
    paddingBottom: '0',
  },
  [$theme.mediaQuery.medium]: {
    paddingTop: '50px',
    paddingBottom: '0',
  },
  [$theme.mediaQuery.large]: {
    paddingTop: '100px',
    paddingBottom: '0',
  },
}));

export const StyledFooterMainText = styled('h1', ({ $theme }) => ({
  fontFamily: 'Bodoni MT',
  fontSize: '62px',
  lineHeight: '64px',
  marginTop: '0',
  [$theme.mediaQuery.small]: {
    fontSize: '42px',
    lineHeight: '44px',
    marginBottom: '20px',
  },
  [$theme.mediaQuery.medium]: {
    fontSize: '52px',
    lineHeight: '44px',
    marginBottom: '30px',
  },
  [$theme.mediaQuery.large]: {
    fontSize: '62px',
    lineHeight: '64px',
    marginBottom: '40px',
  },
}));

export const StyledFooterSubText = styled('p', ({ $theme }) => ({
  color: $theme.colors.accent200,
  fontSize: $theme.typography.ParagraphMedium.fontSize,
  fontWeight: '300',
}));

export const StyledFooterList = styled('ul', ({ $theme }) => ({
  display: 'block',
  [$theme.mediaQuery.small]: { textAlign: 'center' },
  [$theme.mediaQuery.medium]: { textAlign: 'center' },
  [$theme.mediaQuery.large]: { textAlign: 'left' },
}));

export const StyledFooterListHeading = styled('h3', ({ $theme }) => ({
  marginTop: '0',
  marginBottom: '30px',
  fontSize: $theme.typography.ParagraphMedium.fontSize,
  fontWeight: '500',
  color: $theme.colors.accent700,
}));

export const StyledFooterListItem = styled('li', ({ $theme }) => ({
  cursor: 'pointer',
  fontSize: $theme.typography.ParagraphMedium.fontSize,
  fontWeight: '300',
  letterSpacing: '0.3px',
  marginTop: '16px',
  marginBottom: '16px',
  color: $theme.colors.accent100,
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing900,
  ':hover': {
    color: $theme.colors.accent600,
  },
}));

export const StyledFooterSocialLink = styled('li', ({ $theme }) => ({
  height: '26px',
  width: '26px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: '0.12rem',
  borderColor: $theme.colors.accent100,
  borderStyle: 'solid',
  borderRadius: '50%',
  marginRight: '16px',
  cursor: 'pointer',
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing900,
  ':hover': {
    borderColor: $theme.colors.accent600,
  },
}));

export const StyledFooterSocialList = styled('ul', ({ $theme }) => ({
  display: 'flex',
  [$theme.mediaQuery.small]: { justifyContent: 'center' },
  [$theme.mediaQuery.medium]: { justifyContent: 'center' },
  [$theme.mediaQuery.large]: { justifyContent: 'left' },
}));
