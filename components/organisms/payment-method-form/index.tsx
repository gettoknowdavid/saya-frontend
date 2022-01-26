import React from 'react';
import { ParagraphLarge, ParagraphSmall } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Select } from 'baseui/select';
import { PaymentMethod } from '@enums/payment-method';
import { CartFormSelectMethodOverrides } from '@organisms/cart-form/cart-form.styles';
import { HorizontalSpacer, VerticalSpacer } from '@atoms/spacer';
import { useStyletron } from 'baseui';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { FormInput } from '@atoms/form-input';
import { PaymentCard, valid } from 'baseui/payment-card';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { MaskedFormInput } from '@atoms/masked-form-input';
import { currency } from '@utils/currency-formatter';
import { selectCart } from '@redux/slices/cart.slice';
import { Button } from 'baseui/button';
import Image from 'next/image';
import { selectCheckout, setCheckoutStep, setPaymentMethod } from '@redux/slices/checkout.slice';
import { CheckoutSteps } from '@enums/checkout-steps';
import { CartProductInterface } from '../../../types/cart-product.interface';

export function PaymentMethodForm() {
  const [css, theme] = useStyletron();
  // const [value, setValue] = React.useState<Value>([]);
  // const [text, setText] = React.useState('');
  const [cardValue, setCardValue] = React.useState('');
  const [expiration, setExpiration] = React.useState('');
  const [code, setCode] = React.useState('');

  const { card } = valid.number(cardValue);
  let codeLength;
  if (card && card.code && card.code.size) {
    codeLength = card.code.size;
  }

  // const [country, setCountry] = React.useState(COUNTRIES.US);
  const dispatch = useAppDispatch();
  const { items, cartQuantity } = useAppSelector(selectCart);
  const { paymentMethod } = useAppSelector(selectCheckout);

  const subtotal = items.map((item: CartProductInterface) => item.attributes.price * item.quantity)
    .reduce((a, b) => a + b, 0.0);
  const shipping = cartQuantity * 2500;

  return (
    <Block className={css({
      transitionProperty: 'all',
      transitionDuration: theme.animation.timing900,
    })}
    >
      <Block className={css({
        borderBottomWidth: '1px',
        borderBottomColor: theme.colors.mono600,
        borderBottomStyle: 'solid',
      })}
      >
        <Block display="flex" justifyContent="flex-start" alignItems="center">
          <Button
            onClick={() => dispatch(setCheckoutStep(CheckoutSteps.Contact_Information))}
            overrides={{
              BaseButton: {
                style: () => ({
                  paddingTop: '6px',
                  paddingRight: '6px',
                  paddingBottom: '6px',
                  paddingLeft: '6px',
                  borderTopRightRadius: '6px',
                  borderTopLeftRadius: '6px',
                  borderBottomRightRadius: '6px',
                  borderBottomLeftRadius: '6px',
                  backgroundColor: '#6268C5',
                  ':hover': { backgroundColor: '#4449a0' },
                }),
              },
            }}
          >
            <Image src="/back-light.png" height="16px" width="16px" alt="Back Button" />
          </Button>
          <HorizontalSpacer />
          <ParagraphLarge color="mono200" marginTop={0} marginBottom={0}>Card Details</ParagraphLarge>
        </Block>
        <VerticalSpacer height={16} />
        <Block>
          <Select
            options={[
              { id: 'Card', method: PaymentMethod.Card },
              { id: 'PayStack', method: PaymentMethod.PayStack },
              { id: 'Flutterwave', method: PaymentMethod.Flutterwave },
            ]}
            labelKey="id"
            valueKey="method"
            onChange={(e) => dispatch(setPaymentMethod(e.value))}
            value={paymentMethod}
            placeholder="Select Payment Method"
            overrides={CartFormSelectMethodOverrides}
          />
        </Block>
        <VerticalSpacer />
        <FormInput placeholder="Name on Card" />
        <VerticalSpacer />
        <PaymentCard
          value={cardValue}
          onChange={(e) => setCardValue(e.currentTarget.value)}
          clearOnEscape
          placeholder="Card Number"
          overrides={{
            IconWrapper: { style: () => ({ backgroundColor: '#6268C5' }) },
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
        <VerticalSpacer />
        <FlexGrid
          flexGridColumnCount={[1, 1, 2, 2]}
          flexGridRowGap={['20px', '20px', '0px', '0px']}
          flexGridColumnGap={['0px', '0px', '10px', '10px']}
        >
          <FlexGridItem>
            <MaskedFormInput
              value={expiration}
              onChange={(event) => setExpiration(event.currentTarget.value)}
              placeholder="MM/YY"
              mask="99/99"
            />
          </FlexGridItem>
          <FlexGridItem>
            <MaskedFormInput
              value={code}
              onChange={(event) => setCode(event.currentTarget.value)}
              placeholder="CVV"
              mask={codeLength ? '9'.repeat(codeLength) : '999'}
            />
          </FlexGridItem>
        </FlexGrid>
        <VerticalSpacer />
      </Block>
      <VerticalSpacer />
      <Block>
        <Block display="flex" alignItems="center" justifyContent="space-between">
          <ParagraphSmall marginTop={0} marginBottom={0} color="mono200">Subtotal</ParagraphSmall>
          <ParagraphSmall marginTop={0} marginBottom={0} color="mono200">{currency.format(subtotal)}</ParagraphSmall>
        </Block>
        <VerticalSpacer height={10} />
        <Block display="flex" alignItems="center" justifyContent="space-between">
          <ParagraphSmall marginTop={0} marginBottom={0} color="mono200">Shipping</ParagraphSmall>
          <ParagraphSmall marginTop={0} marginBottom={0} color="mono200">{currency.format(shipping)}</ParagraphSmall>
        </Block>
        <VerticalSpacer height={10} />
        <Block display="flex" alignItems="center" justifyContent="space-between">
          <ParagraphSmall marginTop={0} marginBottom={0} color="mono200">Total</ParagraphSmall>
          <ParagraphSmall marginTop={0} marginBottom={0} color="mono200">
            {currency.format(shipping + subtotal)}
          </ParagraphSmall>
        </Block>
        <VerticalSpacer />
      </Block>
      <Button overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            paddingRight: '40px',
            paddingLeft: '40px',
            color: $theme.colors.mono200,
            backgroundColor: '#4EE1C1',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderTopLeftRadius: '8px',
            width: '100%',
            ':hover': {
              backgroundColor: '#4ac2ab',
              boxShadow: $theme.lighting.shadow600,
            },
          }),
        },
      }}
      >
        Checkout
      </Button>
    </Block>
  );
}
