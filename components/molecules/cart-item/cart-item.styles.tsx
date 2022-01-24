import { styled } from 'baseui';

export const StyledCartItemImage = styled('img', ({ $theme }) => ({
  borderRadius: '8px',
  backgroundColor: $theme.colors.mono400,
  [$theme.mediaQuery.small]: { height: '76px', width: '76px' },
  [$theme.mediaQuery.medium]: { height: '60px', width: '60px' },
  [$theme.mediaQuery.large]: { height: '60px', width: '60px' },
}));
