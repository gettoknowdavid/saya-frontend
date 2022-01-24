import React from 'react';
import { Input, InputProps } from 'baseui/input';

export function FormInput(props : InputProps) {
  return (
    <Input
      {...props}
      overrides={{
        Input: {
          style: ({ $theme }) => ({
            backgroundColor: '#6268C5',
            color: $theme.colors.mono200,
            caretColor: $theme.colors.mono200,
            fontSize: $theme.typography.ParagraphSmall.fontSize,
            '::placeholder': { color: $theme.colors.mono600 },
          }),
        },
        InputContainer: { style: () => ({ backgroundColor: '#6268C5' }) },
        MaskToggleButton: { style: ({ $theme }) => ({ color: $theme.colors.mono200 }) },
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
