/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ParagraphLarge } from 'baseui/typography';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { CartFormPhoneInputOverrides } from '@organisms/cart-form/cart-form.styles';
import { HorizontalSpacer, VerticalSpacer } from '@atoms/spacer';
import { COUNTRIES, PhoneInput } from 'baseui/phone-input';
import { useStyletron } from 'baseui';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { Button } from 'baseui/button';
import { BounceLoader } from 'react-spinners';
import { FormInput } from '@atoms/form-input';
import { selectCheckout, setCheckoutStep } from '@redux/slices/checkout.slice';
import { CheckoutSteps } from '@enums/checkout-steps';
import THEME from '../../../theme';

export function CartContactForm() {
  const [css, theme] = useStyletron();
  // const [value, setValue] = React.useState<Value>([]);
  const [text, setText] = React.useState('');
  const [country, setCountry] = React.useState(COUNTRIES.US);
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(selectCheckout);

  return (
    <Block className={css({
      transitionProperty: 'all',
      transitionDuration: theme.animation.timing900,
    })}
    >
      <ParagraphLarge color="mono200" marginTop={0}>Contact Information</ParagraphLarge>
      <Block>
        <FlexGrid
          flexGridColumnCount={[1, 1, 2, 2]}
          flexGridRowGap={['20px', '20px', '0px', '0px']}
          flexGridColumnGap={['0px', '0px', '10px', '10px']}
        >
          <FlexGridItem>
            <FormInput placeholder="First Name" />
          </FlexGridItem>
          <FlexGridItem>
            <FormInput placeholder="Last Name" />
          </FlexGridItem>
        </FlexGrid>
        <VerticalSpacer />
        <FormInput placeholder="Email" />
        <VerticalSpacer />
        <FormInput placeholder="Address" />
        <VerticalSpacer />
        <FormInput placeholder="Country" />
        <VerticalSpacer />
        <FlexGrid
          flexGridColumnCount={[1, 1, 2, 2]}
          flexGridRowGap={['20px', '20px', '0px', '0px']}
          flexGridColumnGap={['0px', '0px', '10px', '10px']}
        >
          <FlexGridItem>
            <FormInput placeholder="State" />
          </FlexGridItem>
          <FlexGridItem>
            <FormInput placeholder="City" />
          </FlexGridItem>
        </FlexGrid>
        <VerticalSpacer />
        <PhoneInput
          text={text}
          country={country}
          onTextChange={(event) => {
            setText(event.currentTarget.value);
          }}
          onCountryChange={(event: any) => setCountry(event.option)}
          overrides={CartFormPhoneInputOverrides}
        />
        <VerticalSpacer />
        <Block display="flex" justifyContent="flex-end" alignItems="center">
          <Block display="flex" justifyContent="flex-end" alignItems="center" color="mono200">
            <BounceLoader color={THEME.colors.accent} loading={loading} size={25} />
          </Block>
          <HorizontalSpacer />
          <Button
            onClick={() => dispatch(setCheckoutStep(CheckoutSteps.Payment_Method))}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  paddingRight: '40px',
                  paddingLeft: '40px',
                  color: $theme.colors.mono200,
                  backgroundColor: '#4449a0',
                  borderTopRightRadius: '8px',
                  borderBottomRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  borderTopLeftRadius: '8px',
                  ':hover': {
                    backgroundColor: '#6268C5',
                    boxShadow: $theme.lighting.shadow600,
                  },
                }),
              },
            }}
          >
            Next
          </Button>
        </Block>
      </Block>
    </Block>
  );
}
