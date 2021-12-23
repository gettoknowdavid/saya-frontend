import { styled } from 'baseui';

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
