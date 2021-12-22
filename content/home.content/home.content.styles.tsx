import { styled } from 'baseui';
import THEME from '../../theme';

export const StyledHeroImage = styled('img', () => ({
  display: 'block',
  borderRadius: '16px',
  position: 'relative',
  width: '80%',
  objectFit: 'cover',
}));

export const StyledFeaturedImage = styled('img', () => ({
  height: '280px',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'bottom',
  borderRadius: '16px',
}));

export const StyledHeroText = styled('h2', () => ({
  fontSize: '3.6em',
  fontWeight: '300',
  marginBottom: '0px',
}));

export const StyledHeroTextBold = styled('span', ({ $theme }) => ({
  fontWeight: 'bold',
  color: $theme.colors.accent,
}));

export const StyledHeroTextSmall = styled('p', () => ({
  ...THEME.typography.heroTagLine,
}));
