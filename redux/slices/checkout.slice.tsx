import { CheckoutSteps } from '@enums/checkout-steps';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@redux/store';
import { Value } from 'baseui/select';
import { AddressInterface } from '../../types';

interface CheckoutState {
    loading: boolean,
    step: CheckoutSteps,
    paymentMethod: Value,
    shippingAddress: AddressInterface,
}

const initialState = {
  loading: false,
  step: CheckoutSteps.Contact_Information,
  paymentMethod: [],
  shippingAddress: null,
} as CheckoutState;

// const getPaymentMethod = (value: Value) => {
//   console.log(value);
//   const { id } = value[0];
//   switch (id) {
//     case 'Card':
//       return [PaymentMethod.Card];
//     case 'PayStack':
//       return [PaymentMethod.PayStack];
//     case 'Flutterwave':
//       return [PaymentMethod.Flutterwave];
//     default:
//       return [PaymentMethod.Card];
//   }
// };

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckoutStep: ((state, action:PayloadAction<CheckoutSteps>) => {
      state.loading = true;
      state.step = action.payload;
      state.loading = false;
    }),
    setShippingAddress: ((state, action:PayloadAction<AddressInterface>) => ({
      ...state, shippingAddress: action.payload,
    })),
    setPaymentMethod: ((state, action) => ({
      ...state, paymentMethod: action.payload,
    })),
  },
});

export const { setCheckoutStep, setShippingAddress, setPaymentMethod } = checkoutSlice.actions;

export const selectCheckout = (state: RootState) => state.checkoutRepo;

export default checkoutSlice.reducer;
