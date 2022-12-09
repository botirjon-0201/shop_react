function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_BASKET":
      const goodIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );
      let newOrder = null;
      if (goodIndex < 0) {
        const newGood = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newGood];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === goodIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
      };

    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((item) => item.mainId !== payload),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.mainId === payload) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        }),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.mainId === payload) {
            return {
              ...orderItem,
              quantity: orderItem.quantity > 0 ? orderItem.quantity - 1 : 0,
            };
          } else {
            return orderItem;
          }
        }),
      };

    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    default:
      return state;
  }
}

export default reducer;
