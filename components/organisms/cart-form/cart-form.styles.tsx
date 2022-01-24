import React from 'react';
import { StyledFlag } from 'baseui/phone-input';

function CustomFlag(props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, ...rest } = props;
  // eslint-disable-next-line react/destructuring-assignment
  return <StyledFlag iso={props.$iso} {...rest} />;
}

export const CartFormSelectMethodOverrides = {
  ControlContainer: {
    style: ({ $theme }) => ({
      backgroundColor: '#6268C5',
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderTopRightRadius: '8px',
      borderTopLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      borderBottomLeftRadius: '8px',
      fontSize: $theme.typography.ParagraphSmall.fontSize,
      color: $theme.colors.mono200,
    }),
  },
  DropdownListItem: {
    style: ({ $theme }) => ({
      backgroundColor: '#6268C5',
      color: $theme.colors.mono200,
      fontSize: $theme.typography.ParagraphSmall.fontSize,
    }),
  },
  Input: { style: ({ $theme }) => ({ color: $theme.colors.mono200 }) },
  Dropdown: { style: () => ({ backgroundColor: '#6268C5' }) },
  Placeholder: { style: ({ $theme }) => ({ color: $theme.colors.mono500 }) },
  ClearIcon: { style: ({ $theme }) => ({ color: $theme.colors.mono200 }) },
  SelectArrow: { style: ({ $theme }) => ({ color: $theme.colors.mono200 }) },
};

export const CartFormPhoneInputOverrides = {
  FlagContainer: {
    style: () => ({ backgroundColor: '#6268C5' }),
    component: CustomFlag,
  },
  DialCode: { style: () => ({ backgroundColor: '#6268C5' }) },
  Input: {
    props: {
      overrides: {
        Root: {
          style: () => ({
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
        InputContainer: {
          style: ({ $theme }) => ({
            backgroundColor: '#6268C5',
            color: $theme.colors.mono200,
            caretColor: $theme.colors.mono200,
            fontSize: $theme.typography.ParagraphSmall.fontSize,
            '::placeholder': { color: $theme.colors.mono400 },
          }),
        },
        Input: {
          style: ({ $theme }) => ({
            color: $theme.colors.mono200,
            caretColor: $theme.colors.mono200,
            fontSize: $theme.typography.ParagraphSmall.fontSize,
            '::placeholder': { color: $theme.colors.mono400 },
          }),
        },
      },
    },
  },
  CountrySelect: {
    style: () => ({
      backgroundColor: '#6268C5',
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
    }),
    props: {
      overrides: {
        ControlContainer: {
          style: ({ $theme }) => ({
            backgroundColor: '#6268C5',
            color: $theme.colors.mono200,
            fontSize: $theme.typography.ParagraphSmall.fontSize,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
          }),
        },
        SelectArrow: {
          style: ({ $theme }) => ({ color: $theme.colors.mono200 }),
        },
        Dropdown: {
          // component: CountrySelectDropdown,
          style: () => ({
            backgroundColor: '#6268C5',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
          }),
        },
      },
    },
  },
};
