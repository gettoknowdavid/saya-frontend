import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Button } from 'baseui/button';
import { useStyletron } from 'baseui';
import PropTypes from 'prop-types';

type Props = {
    quantity: number,
    onIncrease: () => unknown,
    onDecrease: () => unknown,
    forCart?: boolean
}

type ButtonProps = {
    disabled?: boolean,
    forCart: boolean,
    children: React.ReactNode,
    onClick: () => unknown
}

const CounterButton = ({
  disabled, forCart, children, onClick,
}: ButtonProps) => {
  const buttonPaddingBlock = forCart ? '4px' : '8px';
  const buttonPaddingInline = forCart ? '8px' : '16px';

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            width: forCart ? '20px' : '36px',
            height: forCart ? '20px' : '36px',
            paddingTop: buttonPaddingBlock,
            paddingRight: buttonPaddingInline,
            paddingBottom: buttonPaddingBlock,
            paddingLeft: buttonPaddingInline,
            fontSize: $theme.typography.ParagraphXSmall.fontSize,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: forCart ? '5px' : '0px',
            backgroundColor: forCart ? $theme.colors.mono400 : $theme.colors.mono900,
            color: !forCart ? $theme.colors.mono400 : $theme.colors.mono900,
            transitionProperty: 'all',
            transitionDuration: $theme.animation.timing500,
            ':hover': disabled ? null : {
              backgroundColor: !forCart ? $theme.colors.mono400 : $theme.colors.mono900,
              color: forCart ? $theme.colors.mono400 : $theme.colors.mono900,
            },
          }),
        },
      }}
    >
      {children}
    </Button>
  );
};

export function QuantityCounter({
  quantity, forCart, onIncrease, onDecrease,
}: Props) {
  const [css, theme] = useStyletron();

  const flexMaxHeight = forCart ? '20px' : '36px';
  const flexMaxWidth = forCart ? '76px' : '108px';

  const inputHeight = forCart ? '20px' : '36px';
  const inputWidth = '36px';

  const flexItemWidth = forCart ? '20px' : '36px';

  return (
    <FlexGrid
      flexGridColumnCount={3}
      maxHeight={flexMaxHeight}
      maxWidth={flexMaxWidth}
    >
      <FlexGridItem maxWidth={flexItemWidth}>
        <CounterButton
          disabled={quantity <= 1 || !quantity}
          forCart={forCart}
          onClick={onDecrease}
        >
          -
        </CounterButton>
      </FlexGridItem>
      <FlexGridItem maxWidth={inputWidth} display="flex" justifyContent="center" alignItems="center">
        <input
          value={quantity}
          disabled={!quantity}
          onChange={() => null}
          className={css({
            fontSize: theme.typography.ParagraphXSmall.fontSize,
            width: inputWidth,
            height: inputHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            textAlign: 'center',
            ':focus': {
              border: 'none',
              outline: 'none',
            },
          })}
        />
      </FlexGridItem>
      <FlexGridItem maxWidth={flexItemWidth}>
        <CounterButton
          disabled={quantity < 1 || !quantity}
          forCart={forCart}
          onClick={onIncrease}
        >
          +
        </CounterButton>
      </FlexGridItem>
    </FlexGrid>
  );
}

QuantityCounter.propTypes = {
  forCart: PropTypes.bool,
};

QuantityCounter.defaultProps = {
  forCart: false,
};

CounterButton.propTypes = {
  disabled: PropTypes.bool,
  forCart: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

CounterButton.defaultProps = {
  disabled: false,
};
