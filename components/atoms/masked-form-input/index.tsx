import React from 'react';
import { MaskedInput, MaskedInputProps } from 'baseui/input';

export function MaskedFormInput(props: MaskedInputProps) {
  return (
    <MaskedInput
      {...props}
      overrides={{
        InputContainer: { style: () => ({ backgroundColor: '#6268C5' }) },
        Input: {
          style: ({ $theme }) => ({
            backgroundColor: '#6268C5',
            color: $theme.colors.mono200,
            caretColor: $theme.colors.mono200,
            fontSize: $theme.typography.ParagraphSmall.fontSize,
            '::placeholder': { color: $theme.colors.mono600 },
          }),
        },
        Root: {
          style: () => ({
            backgroundColor: '#6268C5',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderTopRightRadius: '8px',
            borderTopLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            borderBottomLeftRadius: '8px',
          }),
        },
      }}
    />
  );
}
