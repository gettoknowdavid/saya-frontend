import React from 'react';
import { FormControl as BaseFormControl, FormControlProps } from 'baseui/form-control';

export function FormControl(props: FormControlProps) {
  const { children } = props;

  return (
    <BaseFormControl
      {...props}
      overrides={{
        ControlContainer: { style: () => ({ marginTop: '0px', marginBottom: '0px' }) },
        Label: { style: ({ $theme }) => ({ fontSize: '12px', color: $theme.colors.mono500 }) },
      }}
    >
      {children}
    </BaseFormControl>
  );
}
