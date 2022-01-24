import React from 'react';
import { Block } from 'baseui/block';
import { HorizontalSpacer, VerticalSpacer } from '@atoms/spacer';
import { selectCart } from '@redux/slices/cart.slice';
import { Container } from '@atoms/container';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Image from 'next/image';
import { HeadingMedium } from 'baseui/typography';
import { useRouter } from 'next/router';
import { CartItem } from '@molecules/cart-item';
import { useStyletron } from 'baseui';
import { PaymentMethodForm } from '@organisms/payment-method-form';
import { CartContactForm } from '@organisms/cart-contact-form';
import { selectCheckout } from '@redux/slices/checkout.slice';
import { useAppSelector } from '@hooks/redux-hooks';
import { CheckoutSteps } from '@enums/checkout-steps';
import { Button } from 'baseui/button';
import { CartProductInterface } from '../../types/cart-product.interface';
import {
  CartBackText, CartBackWrapper, CartSubtitle, CartTitle,
} from './cart.content.styles';

function BackToShoppingButton() {
  const router = useRouter();
  const goBackToShopping = () => router.push('/shop');

  return (
    <CartBackWrapper>
      <Button
        onClick={goBackToShopping}
        overrides={{
          BaseButton: {
            style: () => ({
              paddingTop: '6px',
              paddingRight: '6px',
              paddingBottom: '6px',
              paddingLeft: '6px',
              backgroundColor: 'transparent',
              ':hover': { backgroundColor: 'transparent' },
              ':focus': { backgroundColor: 'transparent' },
            }),
          },
        }}
      >
        <Image src="/back.png" width="16px" height="16px" alt="Back Icon" />
        <HorizontalSpacer width={14} />
        <CartBackText>Continue Shopping</CartBackText>
      </Button>
      <VerticalSpacer />
    </CartBackWrapper>
  );
}

export function CartContent() {
  const [css, theme] = useStyletron();
  const { items, cartQuantity } = useAppSelector(selectCart);
  const { step } = useAppSelector(selectCheckout);

  const itemsStatement = () => (cartQuantity > 1
    ? `You have ${cartQuantity} items in your cart`
    : `You have ${cartQuantity} item in your cart`);

  const checkoutSection = () => {
    switch (step) {
      case CheckoutSteps.Contact_Information:
        return (<CartContactForm />);
      case CheckoutSteps.Payment_Method:
        return (<PaymentMethodForm />);
      default:
        return (<CartContactForm />);
    }
  };

  return (
    <Container paddingTop={['60px', '60px', '70px', '80px']} className={css({ position: 'relative' })}>
      <FlexGrid flexGridColumnCount={[1, 1, 2, 2]} flexGridColumnGap={['0px', '0px', '20px', '30px']}>
        <FlexGridItem
          maxWidth={['100%', '100%', '100%', '65%']}
          paddingTop={['10px', '10px', '16px', '16px']}
          paddingBottom={['10px', '10px', '16px', '16px']}
        >
          {items.length < 1 ? (
            <Block
              display="flex"
              height="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <HeadingMedium marginTop={0} marginBottom="16px">You cart is empty.</HeadingMedium>
              <BackToShoppingButton />
            </Block>
          ) : (
            <>
              <BackToShoppingButton />
              <Block>
                <Block>
                  <CartTitle>Shopping Cart</CartTitle>
                  <CartSubtitle>{itemsStatement()}</CartSubtitle>
                </Block>
                <VerticalSpacer />
                <ul>
                  {items.map((item: CartProductInterface) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>
              </Block>
            </>
          )}
        </FlexGridItem>
        <FlexGridItem maxWidth={['100%', '100%', '100%', '35%']} position="relative">
          <div className={css({
            borderRadius: '16px',
            backgroundColor: '#565CBA',
            paddingBlock: '26px',
            paddingInline: '20px',
            top: '80px',
            position: 'sticky',
          })}
          >
            {checkoutSection()}
          </div>
        </FlexGridItem>
      </FlexGrid>
    </Container>
  );
}
