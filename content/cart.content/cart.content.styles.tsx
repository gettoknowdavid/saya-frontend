import { styled } from 'baseui';
import { Block } from 'baseui/block';
import { ParagraphMedium, ParagraphSmall, ParagraphXSmall } from 'baseui/typography';

export const CartBackWrapper = styled('div', ({ $theme }) => ({
  borderBottom: `1px solid ${$theme.colors.mono300}`,
  paddingBottom: '20px',
  display: 'block',
  backgroundColor: 'flex',
}));

export const CartBackText = styled(ParagraphSmall, ({ $theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  letterSpacing: '0.3px',
  color: $theme.colors.accent700,
  fontWeight: '500',
  ':hover': { color: $theme.colors.accent500 },
}));

export const CartTitle = styled(ParagraphMedium, () => ({
  marginTop: '0',
  marginBottom: '4px',
}));

export const CartSubtitle = styled(ParagraphXSmall, ({ $theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  color: $theme.colors.accent300,
  letterSpacing: '0.3px',
}));
