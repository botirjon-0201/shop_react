import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  isBasketShow: false,
};

export const goodSlice = createSlice({
  name: "good",
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goods = action.payload;
      state.isLoading = false;
    },
    addToBasket(state, action) {
      const goodIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === action.payload.mainId
      );
      let newOrder = null;
      if (goodIndex < 0) {
        const newGood = { ...action.payload, quantity: 1 };
        newOrder = [...state.order, newGood];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          return index === goodIndex
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem;
        });
      }
      state.order = newOrder;
    },
    toggleBasketShow(state) {
      state.isBasketShow = !state.isBasketShow;
    },
    removeFromBasket(state, action) {
      state.order = state.order.filter(
        (item) => item.mainId !== action.payload
      );
    },
    incrementQuantity(state, action) {
      state.order = state.order.map((orderItem) => {
        return orderItem.mainId === action.payload
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem;
      });
    },
    decrementQuantity(state, action) {
      state.order = state.order.map((orderItem) => {
        return orderItem.mainId === action.payload
          ? {
              ...orderItem,
              quantity: orderItem.quantity > 0 ? orderItem.quantity - 1 : 0,
            }
          : orderItem;
      });
    },
  },
});

export default goodSlice.reducer;
export const {
  setGoods,
  addToBasket,
  toggleBasketShow,
  removeFromBasket,
  incrementQuantity,
  decrementQuantity,
} = goodSlice.actions;
