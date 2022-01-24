import { styled } from 'baseui';
import Theme from '../theme';

export const StyledLayout = styled('div', ({ $theme }) => ({
  maxWidth: '1440px',
  margin: '0px auto',
  position: 'relative',
  backgroundColor: $theme.colors.mono300,
  color: $theme.colors.accent500,
  fontFamily: Theme.primaryFontFamily,
  overflowX: 'hidden',
}));

export const StyledLayoutBody = styled('div', ({ $theme }) => ({
  maxWidth: '1440px',
  // minHeight: '100vh',
  height: '100%',
  margin: '0px auto',
  color: $theme.colors.accent500,
  backgroundColor: $theme.colors.mono300,
}));
