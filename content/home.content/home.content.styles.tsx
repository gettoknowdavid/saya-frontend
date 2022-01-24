import { styled } from 'baseui';
import THEME from '../../theme';

export const StyledHeroImage = styled('img', ({ $theme }) => ({
  borderRadius: '16px',
  position: 'relative',
  objectFit: 'cover',
  width: '100%',
  [$theme.mediaQuery.small]: { display: 'none' },
  [$theme.mediaQuery.medium]: { display: 'none' },
  [$theme.mediaQuery.large]: { display: 'block' },
}));
export const StyledNewFeatureImage = styled('img', () => ({
  display: 'block',
  borderRadius: '16px',
  position: 'relative',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}));

export const StyledFeaturedImage = styled('img', ({ $theme }) => ({
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'bottom',
  borderRadius: '16px',
  [$theme.mediaQuery.small]: { height: '300px' },
  [$theme.mediaQuery.medium]: { height: '500px' },
  [$theme.mediaQuery.large]: { height: '280px' },
}));

export const StyledHeroText = styled('h2', ({ $theme }) => ({
  fontWeight: '300',
  marginBottom: '0px',
  [$theme.mediaQuery.small]: { fontSize: '3.1em', paddingTop: '80px' },
  [$theme.mediaQuery.medium]: { fontSize: '4.6em', paddingTop: '50px' },
  [$theme.mediaQuery.large]: { fontSize: '3.6em', paddingTop: '0px' },
}));

export const StyledHeroTextBold = styled('span', ({ $theme }) => ({
  fontWeight: 'bold',
  color: $theme.colors.accent,
}));

export const StyledHeroTextSmall = styled('p', () => ({
  ...THEME.typography.heroTagLine,
}));

export const StyledSectionHeader = styled('p', ({ $theme }) => ({
  fontWeight: '600',
  fontFamily: 'Bodoni MT',
  color: $theme.colors.accent400,
  textAlign: 'center',
  marginBottom: '0px',
  marginTop: '0px',
  [$theme.mediaQuery.small]: { fontSize: $theme.typography.HeadingXXLarge.fontSize },
  [$theme.mediaQuery.medium]: { fontSize: $theme.typography.DisplaySmall.fontSize },
  [$theme.mediaQuery.large]: { fontSize: $theme.typography.DisplayMedium.fontSize },
}));
