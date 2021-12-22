import React from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from 'baseui/button';
import { Theme, useStyletron } from 'baseui';
import THEME from '../../../theme';

export enum ButtonVariant {
    FILLED,
    TRANSPARENT
}

type StyleProps = {
    $theme: Theme
}

type ButtonProps = {
    children: BaseButtonProps['children'],
    color?: string,
    variant?: ButtonVariant,
    showBorder?: boolean,
    borderColor?: string,
    borderWidth?: number,
    paddingTop?,
    paddingRight?,
    paddingBottom?,
    paddingLeft?,
    marginTop?,
    marginRight?,
    marginBottom?,
    marginLeft?,
    width?
}

export function Button({
  color,
  children,
  variant,
  borderColor,
  borderWidth,
  showBorder,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  width,
}: ButtonProps) {
  const [css] = useStyletron();

  return (
    <BaseButton
      overrides={{
        BaseButton: {
          style: ({ $theme }: StyleProps) => ({
            width,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            backgroundColor: variant === ButtonVariant.FILLED ? color : 'transparent',
            color: $theme.colors.accent600,
            outlineColor: showBorder ? borderColor : color,
            outlineWidth: `${borderWidth}px`,
            outlineStyle: 'solid',
            ':hover': {
              backgroundColor: $theme.colors.accent50,
              outlineColor: $theme.colors.accent50,
            },
          }),
        },
      }}
    >
      <div className={css({})}>{children}</div>
    </BaseButton>
  );
}

Button.defaultProps = {
  variant: ButtonVariant.FILLED,
  color: THEME.colors.accent,
  showBorder: false,
  borderColor: THEME.colors.accent,
  borderWidth: 2,
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  paddingTop: '16px',
  paddingRight: '30px',
  paddingBottom: '16px',
  paddingLeft: '30px',
  width: 'inherited',
};
