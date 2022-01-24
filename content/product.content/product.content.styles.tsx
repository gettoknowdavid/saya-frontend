import { styled } from 'baseui';

export const StyledProductDetailTitle = styled('p', ({ $theme }) => ({
  fontSize: $theme.typography.ParagraphXSmall.fontSize,
  fontWeight: '300',
  color: $theme.colors.mono700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginTop: '6px',
  marginBottom: '6px',
}));

export const StyledProductDetailItem = styled('p', ({ $theme }) => ({
  fontSize: $theme.typography.ParagraphSmall.fontSize,
  lineHeight: $theme.typography.ParagraphSmall.lineHeight,
  color: $theme.colors.accent500,
  fontWeight: '300',
  marginTop: '6px',
  marginBottom: '6px',
}));

export const StyledProductImage = styled('img', ({ $theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transitionProperty: 'all',
  transitionDuration: $theme.animation.timing900,
}));
